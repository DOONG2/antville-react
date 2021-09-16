import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
import StockDetailFeed from '../../components/stock/StockDetailFeed'
import { Stock } from '../../lib/api/types'
import StockChart from '../../components/stock/StockChart'
import styled from '@emotion/styled'
import media from '../../lib/styles/media'
import { Desktop } from '../../components/common/Responsive'

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
        <Desktop>
          <PostForm />
        </Desktop>
        <StockDetailFeed stock={stock} />
      </FeedWapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  padding: 2.3rem 2.9rem 2.3rem 2.9rem;
  margin-bottom: 2.9rem;
  box-shadow: 0px 2px 5px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
  ${media.medium} {
    margin-bottom: 0;
    padding: 0;
  }
`

const FeedWapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
`

export default StockDetailPage
