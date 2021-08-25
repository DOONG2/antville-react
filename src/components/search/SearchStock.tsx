import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AVStock from '../../lib/models/av_stock'
import searchStorage from '../../lib/searchStorage'
import {
  EmptyWrapper,
  HoverListWrapper,
  NewStockListGroup,
} from '../../lib/styles/search'
import {
  CompanyName,
  StockListItem,
  StockName,
} from '../../lib/styles/stockList'
import viewSlice from '../../reducers/Slices/view'
import { useRootState } from '../common/hooks/useRootState'

export default function SearchStock() {
  const {
    search: { stocks },
  } = useRootState((state) => state.search)
  const { setIsFocusSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()
  const { setHistoryStocks: set } = searchStorage

  if (!stocks) return <></>

  return (
    <>
      {stocks.length >= 1 ? (
        stocks
          .map((stock) => new AVStock(stock))
          .map((avStock) => (
            <HoverListWrapper
              key={`${avStock.id}-search-bar`}
              onClick={() => {
                set(avStock.stock)
                // dispatch(setHistoryStocks(get()))
                dispatch(setIsFocusSearchBar(false))
                history.push(`/stock/${avStock.stock.cashTagName}`)
              }}
            >
              <NewStockListGroup>
                <StockListItem>
                  <StockName>{avStock.title}</StockName>
                </StockListItem>
                <StockListItem>
                  <CompanyName>{avStock.description}</CompanyName>
                </StockListItem>
              </NewStockListGroup>
            </HoverListWrapper>
          ))
      ) : (
        <EmptyWrapper>검색 결과가 없습니다.</EmptyWrapper>
      )}
    </>
  )
}
