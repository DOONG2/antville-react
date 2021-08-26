import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import ReconnectingWebSocket from 'reconnecting-websocket'
import { useRootState } from '../../components/common/hooks/useRootState'
import newPostSlice from '../../reducers/Slices/newPost'
import stockSlice from '../../reducers/Slices/stock'
import { Post, StockPriceInfo } from '../api/types'
import { selectAllPriceSymbolList } from '../../selectors/stockSelectors'
import { v4 as uuidv4 } from 'uuid'

export const WebsocketContext = createContext<{
  ws?: ReconnectingWebSocket
  open: boolean
  id?: string
}>({ ws: undefined, open: false })

interface Props {
  children: React.ReactNode
}

export function WebsocketProvider({ children }: Props) {
  const uuid = useMemo(() => uuidv4(), [])
  const rws = useMemo(
    () =>
      new ReconnectingWebSocket(process.env.REACT_APP_WS_URL!, uuid, {
        maxReconnectionDelay: 60000,
        minReconnectionDelay: 3000,
        reconnectionDelayGrowFactor: 1.3,
        minUptime: 2000,
        connectionTimeout: 5000,
        maxRetries: 20,
        maxEnqueuedMessages: 10,
        startClosed: false,
        debug: false,
      }),
    []
  )
  const [open, setOpen] = useState<boolean>(false)
  const symbols = useRootState((state) => selectAllPriceSymbolList(state))
  const dispatch = useDispatch()
  const { addOrReplaceStockPrice } = stockSlice.actions
  const { addNewPost } = newPostSlice.actions

  useEffect(() => {
    rws.addEventListener('open', (_) => {
      setOpen(true)
    })
    rws.addEventListener('close', (_) => {
      setOpen(false)
    })
    rws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (isStockPriceInfo(data)) {
        dispatch(addOrReplaceStockPrice(data))
      } else if (isStockPost(data)) {
        dispatch(addNewPost(data))
      }
    }
    return () => rws.close()
  }, [])

  useEffect(() => {
    if (open && symbols.length > 0) {
      sendStockSymbols()
    }
  }, [open, symbols])

  const sendStockSymbols = useCallback(() => {
    if (symbols) {
      rws.send(
        JSON.stringify({
          event: 'CHANGE_STOCK_PRICE_INFO',
          data: {
            id: uuid,
            symbols: symbols,
          },
        })
      )
    }
  }, [symbols])

  return (
    <WebsocketContext.Provider value={{ ws: rws, open: open, id: uuid }}>
      {children}
    </WebsocketContext.Provider>
  )
}

function isStockPriceInfo(object: any): object is StockPriceInfo {
  return 'symbol' in object
}

function isStockPost(object: any): object is Post {
  return 'id' in object
}
