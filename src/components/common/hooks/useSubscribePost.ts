import { useCallback, useContext, useEffect } from 'react'
import { InfiniteData, useQueryClient } from 'react-query'
import { Post } from '../../../lib/api/types'
import { activated_stock, post_query_key } from '../../../lib/variable'
import { WebsocketContext } from '../../../lib/websocket'

export default function useSubscribePost(symbol: string) {
  const { ws, open, id, getSubscription } = useContext(WebsocketContext)
  const queryClient = useQueryClient()

  const mutatePost = useCallback(
    (post: Post) => {
      const key = [post_query_key, symbol, { page: activated_stock }]
      const previousQuery = queryClient.getQueryData<InfiniteData<Post[]>>(key)
      if (previousQuery?.pages[0]) {
        previousQuery.pages[0].unshift(post)

        let data = {
          pages: previousQuery.pages,
          pageParams: previousQuery.pageParams,
        }
        queryClient.setQueriesData(key, data)
      }
    },
    [symbol]
  )

  useEffect(() => {
    const tempSubscription = getSubscription!({
      next: (post) => {
        mutatePost(post)
      },
    })
    return () => {
      if (tempSubscription && !tempSubscription?.closed) {
        tempSubscription.unsubscribe()
      }
    }
  }, [symbol])

  useEffect(() => {
    return () => sendStockDetailSymbol()
  }, [])

  useEffect(() => {
    if (open) {
      sendStockDetailSymbol(symbol)
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
