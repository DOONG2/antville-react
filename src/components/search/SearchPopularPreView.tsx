import styled from '@emotion/styled'
import useStockPopularQuery from '../stock/hooks/useStockPopularQuery'
import { StockListHeader, StockListWrapper } from '../../lib/styles/stockList'
import { useRootState } from '../common/hooks/useRootState'
import { WatchListStockGroup } from '../stock/WatchlistStockGroup'

export default function PopularPreView() {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { stocks } = useStockPopularQuery()

  if (!stocks) return <></>

  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
        <StockListHeader>실시간 인기 종목</StockListHeader>
        {stocks?.map((stock) => (
          <WatchListStockGroup
            key={`${stock.id}-search-popular-stock-preivew`}
            stock={stock}
          />
        ))}
      </HotStockListWrapper>
    </>
  )
}

const HotStockListWrapper = styled(StockListWrapper)<{ isOpen: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 2;
`
