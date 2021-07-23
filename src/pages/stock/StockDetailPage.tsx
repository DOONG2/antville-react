import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByStock from '../../lib/api/post/getPostsByStock'
import { StockPageProps } from './type'

function StockDetailPage({ stock }: StockPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `stock-detail-${stock.id}`,
    callback: (cursor) => getPostsByStock(stock.id, cursor),
  })
  if (!posts) return <></>
  return (
    <>
      <FeedSection
        posts={posts}
        loading={isLoading}
        emptyComponent={<FollowingEmpty />}
      />
    </>
  )
}

export default StockDetailPage
