import styled from '@emotion/styled'
import useStockPopularQuery from '../stock/hooks/useStockPopularQuery'
import { StockListHeader, StockListWrapper } from '../../lib/styles/stockList'
import { useRootState } from '../common/hooks/useRootState'
import { WatchListStockGroup } from '../stock/WatchlistStockGroup'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'

export default function PopularPreView() {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setIsFocusSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const { stocks } = useStockPopularQuery()

  if (!stocks) return <></>

  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
        <StockListHeader>실시간 인기 종목</StockListHeader>
        <CloseWrapper onClick={() => dispatch(setIsFocusSearchBar(false))}>
          {stocks?.map((stock) => (
            <WatchListStockGroup
              key={`${stock.id}-search-popular-stock-preivew`}
              stock={stock}
            />
          ))}
        </CloseWrapper>
      </HotStockListWrapper>
    </>
  )
}

const HotStockListWrapper = styled(StockListWrapper)<{ isOpen: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 1001;
`

const CloseWrapper = styled.div``
