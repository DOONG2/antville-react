import NomalEmpty from '../../components/feed/empty/NomalEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByStock from '../../lib/api/post/getPostsByStock'
import { Stock } from '../../lib/api/types'
import { activated_stock, post_query_key } from '../../lib/variable'
import useInfinitePosts from '../../pages/home/hooks/useInfinitePosts'
import useSubscribePost from '../common/hooks/useSubscribePost'

type StockPageProps = {
  stock: Stock
}

function StockDetailFeed({ stock }: StockPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, stock.cashTagName, { page: activated_stock }],
    callback: (cursor) => getPostsByStock(stock.id, cursor),
  })
  useSubscribePost(stock.symbol)

  if (!posts) return <></>
  return (
    <FeedSection
      sectionKey={`stock-detail-${stock.id}`}
      posts={posts}
      loading={isLoading}
      emptyComponent={<NomalEmpty />}
      keyId={stock.id}
    />
  )
}

export default StockDetailFeed
