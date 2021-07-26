import useInfinitePosts from '../home/hooks/useInfinitePosts'
import NomalEmpty from '../../components/feed/empty/NomalEmpty'
import FeedSection from '../../components/feed/FeedSection'
import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
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
      <StockInfo stock={stock} />
      <PostForm />
      <FeedSection
        sectionKey={`stock-detail-${stock.id}`}
        posts={posts}
        loading={isLoading}
        emptyComponent={<NomalEmpty />}
      />
    </>
  )
}

export default StockDetailPage
