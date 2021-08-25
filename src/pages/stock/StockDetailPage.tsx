import useInfinitePosts from '../home/hooks/useInfinitePosts'
import NomalEmpty from '../../components/feed/empty/NomalEmpty'
import FeedSection from '../../components/feed/FeedSection'
import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
import getPostsByStock from '../../lib/api/post/getPostsByStock'
import AVStock from '../../lib/models/av_stock'
import StockChart from '../../components/stock/StockChart'

type StockPageProps = {
  avStock: AVStock
}

function StockDetailPage({ avStock }: StockPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: ['post', avStock.id, { page: 'stock-detail' }],
    callback: (cursor) => getPostsByStock(avStock.id, cursor),
  })

  if (!posts) return <></>
  return (
    <>
      <StockInfo avStock={avStock} />
      <StockChart symbol={avStock.stock.symbol} />
      <PostForm />
      <FeedSection
        sectionKey={`stock-detail-${avStock.id}`}
        posts={posts}
        loading={isLoading}
        emptyComponent={<NomalEmpty />}
      />
    </>
  )
}

export default StockDetailPage
