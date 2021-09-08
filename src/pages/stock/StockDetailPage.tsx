import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
import StockDetailFeed from '../../components/stock/StockDetailFeed'
import { Stock } from '../../lib/api/types'
import StockChart from '../../components/stock/StockChart'
import styled from '@emotion/styled'

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

const Wrapper = styled.div`
  background-color: #fff;
  padding: 23px 29px 23px 29px;
  margin-bottom: 29px;
  box-shadow: 0px 2px 5px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
`

const FeedWapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
`

export default StockDetailPage
