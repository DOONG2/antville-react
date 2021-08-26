import styled from '@emotion/styled'
import useStockPopularQuery from '../stock/hooks/useStockPopularQuery'
import { StockListHeader, StockListWrapper } from '../../lib/styles/stockList'
import { WatchListStockGroup } from '../stock/WatchlistStockGroup'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'

export default function PopularPreView() {
  const { setIsOpenSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const { stocks } = useStockPopularQuery()

  if (!stocks) return <></>

  return (
    <>
      <HotStockListWrapper>
        <StockListHeader>실시간 인기 종목</StockListHeader>
        <CloseWrapper onClick={() => dispatch(setIsOpenSearchBar(false))}>
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

const HotStockListWrapper = styled(StockListWrapper)`
  position: absolute;

  width: 32.8rem;
  top: 5.2rem;

  z-index: 1001;
`

const CloseWrapper = styled.div``
