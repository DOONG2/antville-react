import { useContext, useEffect } from 'react'
import { WebsocketContext } from '../../../lib/websocket'

export default function useSubscribePost(symbol: string) {
  const { ws, open, id } = useContext(WebsocketContext)

  useEffect(() => {
    if (open) {
      sendStockDetailSymbol(symbol)
    }
    return () => {
      sendStockDetailSymbol()
    }
  }, [symbol, open])

  const sendStockDetailSymbol = (symbol?: string) => {
    ws?.send(
      JSON.stringify({
        event: 'NEW_POST',
        data: {
          id: id,
          symbols: symbol ? [symbol] : [],
        },
      })
    )
  }
  return
}
