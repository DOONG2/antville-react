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

export default function SearchPreview() {
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
            </StockListItem>
            <StockListItem>
              <CompanyName>{stock.symbol}/KRW</CompanyName>
              <UpDownRate></UpDownRate>
            </StockListItem>
          </StockListGroup>
        ))}
      </HotStockListWrapper>
    </>
  )
}
