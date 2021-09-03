import { InfiniteData, useQueryClient } from 'react-query'
import { Post } from '../../api/types'
import { activated_stock, post_query_key } from '../../variable'
import useGetTicker from './useGetTicker'

export default function useWebSocketMutation() {
  const queryClinet = useQueryClient()
  const ticker = useGetTicker()

  const setStockDetailPost = (post: Post) => {
    if (!ticker) return
    const key = [post_query_key, ticker, { page: activated_stock }]
    const previousQuery = queryClinet.getQueryData<InfiniteData<Post[]>>(key)
    if (previousQuery) {
      let data = {
        pages: [post].concat(previousQuery.pages.flat()),
        pageParams: previousQuery.pageParams,
      }
      queryClinet.setQueriesData(key, data)
    }
  }

  return { setStockDetailPost }
}
