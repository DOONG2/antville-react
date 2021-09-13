import { Subscription } from 'rxjs'
import { useCallback, useContext, useEffect, useState } from 'react'
import { InfiniteData, useQueryClient } from 'react-query'
import { Post } from '../../../lib/api/types'
import { activated_stock, post_query_key } from '../../../lib/variable'
import { WebsocketContext } from '../../../lib/websocket'

export default function useSubscribePost(symbol: string) {
  const { ws, open, id, getSubscription } = useContext(WebsocketContext)
  const queryClient = useQueryClient()
  const [subscription, setSubscription] = useState<Subscription | undefined>()

  const mutatePost = useCallback(
    (post: Post) => {
      const key = [post_query_key, symbol, { page: activated_stock }]
      const previousQuery = queryClient.getQueryData<InfiniteData<Post[]>>(key)
      if (previousQuery) {
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
    if (subscription) {
      subscription.unsubscribe()
    }
    setSubscription(
      getSubscription!({
        next: (post) => {
          mutatePost(post)
        },
      })
    )

    return () => {
      subscription?.unsubscribe()
    }
  }, [symbol])

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
