import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
import StockDetailFeed from '../../components/stock/StockDetailFeed'
import { Stock } from '../../lib/api/types'
import StockChart from '../../components/stock/StockChart'
import { FeedWapper, Wrapper } from '../../lib/styles/feed'

type StockPageProps = {
  stock: Stock
}

function StockDetailPage({ stock }: StockPageProps) {
  return (
    <>
      <Wrapper>
        <StockInfo stock={stock} />
        <StockChart symbol={stock.symbol} />
      </Wrapper>
      <FeedWapper>
        <PostForm />
        <StockDetailFeed stock={stock} />
      </FeedWapper>
    </>
  )
}

export default StockDetailPage
