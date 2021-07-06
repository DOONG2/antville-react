import styled from '@emotion/styled'
import useStockPopularQuery from '../../hooks/query/useStockPopularQuery'
import { useRootState } from '../../hooks/useRootState'
import {
  CompanyName,
  StockListGroup,
  StockListHeader,
  StockListItem,
  StockListWrapper,
  StockName,
  StockPrice,
  UpDownIcon,
  UpDownRate,
} from '../../mds/styled/stockList'

const HotStockListWrapper = styled(StockListWrapper)<{ isOpen: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 2;
`

export default function PopularPreView() {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { data } = useStockPopularQuery()

  if (!data) return <></>

  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
        <StockListHeader>실시간 인기 종목</StockListHeader>
        {data?.stocks.map((stock) => (
          <StockListGroup key={`${stock.id}-search-bar`}>
            <StockListItem>
              <StockName>{stock.krName}</StockName>
              <StockPrice>₩64,551,100</StockPrice>
            </StockListItem>
            <StockListItem>
              <CompanyName>{stock.symbol}/KRW</CompanyName>
              <UpDownRate>
                <UpDownIcon>*</UpDownIcon>20.21 (-2.91%)
              </UpDownRate>
            </StockListItem>
          </StockListGroup>
        ))}
      </HotStockListWrapper>
    </>
  )
}
