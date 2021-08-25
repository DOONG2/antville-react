import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NomalEmpty from '../../components/feed/empty/NomalEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByStock from '../../lib/api/post/getPostsByStock'
import { Stock } from '../../lib/api/types'
import { post_query_key } from '../../lib/variable'
import useInfinitePosts from '../../pages/home/hooks/useInfinitePosts'
import newPostSlice from '../../reducers/Slices/newPost'
import { useRootState } from '../common/hooks/useRootState'
import useSubscribePost from '../common/hooks/useSubscribePost'

type StockPageProps = {
  stock: Stock
}

function StockDetailFeed({ stock }: StockPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, stock.id, { page: 'stock' }],
    callback: (cursor) => getPostsByStock(stock.id, cursor),
  })
  const { reset } = newPostSlice.actions
  const dispatch = useDispatch()
  const newPost = useRootState((state) => state.newPost)
  useSubscribePost(stock.symbol)

  useEffect(() => {
    dispatch(reset())
  }, [stock.symbol])

  if (!posts && newPost.length <= 0) return <></>
  return (
    <FeedSection
      sectionKey={`stock-detail-${stock.id}`}
      posts={[...newPost, ...(posts ?? [])]}
      loading={isLoading}
      emptyComponent={<NomalEmpty />}
      stockId={stock.id}
    />
  )
}

export default StockDetailFeed
