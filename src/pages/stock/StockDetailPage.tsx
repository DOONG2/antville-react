import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
import StockDetailFeed from '../../components/stock/StockDetailFeed'
import { Stock } from '../../lib/api/types'
import StockChart from '../../components/stock/StockChart'

type StockPageProps = {
  stock: Stock
}

function StockDetailPage({ stock }: StockPageProps) {
  return (
    <>
      <StockInfo stock={stock} />
      <StockChart symbol={stock.symbol} />
      <PostForm />
      <StockDetailFeed stock={stock} />
    </>
  )
}

export default StockDetailPage
