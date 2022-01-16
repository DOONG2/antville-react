import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import ReconnectingWebSocket from 'reconnecting-websocket'
import { v4 as uuidv4 } from 'uuid'
import usePostStream from './hooks/usePostStream'
import { Observer, Subscription } from 'rxjs'
import { useRootState } from 'src/components/common/hooks/useRootState'
import { Post, StockPriceInfo } from 'src/api/types'
import { addOrReplaceStockPrice } from 'src/features/Stock/StockSlice'
import { selectAllPriceSymbolList } from 'src/features/Stock/StockSelectors'

// Context API로 websocket 데이터 상태 관리
export const WebsocketContext = createContext<{
  ws?: ReconnectingWebSocket
  open: boolean
  id?: string
  getSubscription?: (observer: Partial<Observer<Post>>) => Subscription
}>({ open: false })

interface Props {
  children: React.ReactNode
}

export function WebsocketProvider({ children }: Props) {
  // websocket 연결 상태와 요청할 종목리스트
  const [open, setOpen] = useState<boolean>(false)
  const symbols = useRootState((state) => selectAllPriceSymbolList(state))

  // 게시글에 대한 steam hook
  const { pushPost, getSubscription } = usePostStream()

  const dispatch = useDispatch()

  // 보안을 위한 패킷용 uuid
  const uuid = useMemo(() => uuidv4(), [])
  // 가벼운 websocket API 재연결 라이브러리
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

  // 클라이언트단 socket 전송
  const sendStockSymbols = useCallback(() => {
    if (symbols)
      rws.send(
        JSON.stringify({
          event: 'CHANGE_STOCK_PRICE_INFO',
          data: {
            id: uuid,
            symbols,
          },
        })
      )
  }, [symbols])

  useEffect(() => {
    // socket 연결 닫기 이벤트 리스너
    rws.addEventListener('open', (_) => setOpen(true))
    rws.addEventListener('close', (_) => setOpen(false))

    // socket 데이터 받는 message 핸들러 함수
    rws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      // 주식 종목에 대한 observable 이면 reducer에 저장
      if (isStockPriceInfo(data)) dispatch(addOrReplaceStockPrice(data))
      // 게시글에 대한 observable 이면 post로 변경
      // 해당 뷰 컴포넌트에서 getSubscription 함수로 게시글 데이터를 reducer에 저장
      else if (isStockPost(data)) pushPost(data)
    }
    return () => rws.close()
  }, [])

  useEffect(() => {
    // socket 연결과 주식 종목이 존재할 때만 실행
    if (open && symbols.length > 0) sendStockSymbols()
  }, [open, symbols])

  return (
    <WebsocketContext.Provider
      value={{
        ws: rws,
        open,
        id: uuid,
        getSubscription,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  )
}

// 받아온 websocket 데이터가 주식 종목인지 체크하는 함수
function isStockPriceInfo(object: any): object is StockPriceInfo {
  return 'symbol' in object
}

// 받아온 websocket 데이터가 게시글 데이터인지 체크하는 함수
function isStockPost(object: any): object is Post {
  return 'id' in object
}
