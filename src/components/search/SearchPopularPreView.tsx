import styled from '@emotion/styled'
import useStockPopularQuery from '../stock/hooks/useStockPopularQuery'
import { StockListHeader } from '../../lib/styles/stockList'
import { WatchListStockGroup } from '../stock/WatchlistStockGroup'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { HotStockListWrapper } from '../../lib/styles/search'

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

const CloseWrapper = styled.div``
