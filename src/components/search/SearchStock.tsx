import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import searchStorage from '../../lib/searchStorage'
import {
  EmptyWrapper,
  ListWrapper,
  NewStockListGroup,
} from '../../lib/styles/search'
import {
  CompanyName,
  StockListItem,
  StockName,
} from '../../lib/styles/stockList'
import searchSlice from '../../reducers/Slices/search'
import viewSlice from '../../reducers/Slices/view'
import { useRootState } from '../common/hooks/useRootState'

export default function SearchStock() {
  const {
    search: { stocks },
  } = useRootState((state) => state.search)
  const { setHistoryStocks } = searchSlice.actions
  const { setIsFocusSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()
  const { setHistoryStocks: set, getHistoryStocks: get } = searchStorage

  if (!stocks) return <></>

  return (
    <>
      {stocks.length >= 1 ? (
        stocks.map((stock) => (
          <ListWrapper key={`${stock.id}-search-bar`}>
            <NewStockListGroup
              onClick={() => {
                history.push(`/stock/${stock.cashTagName}`)
                set(stock)
                dispatch(setHistoryStocks(get()))
                dispatch(setIsFocusSearchBar(false))
              }}
            >
              <StockListItem>
                <StockName>{stock.cashTagName}</StockName>
              </StockListItem>
              <StockListItem>
                <CompanyName>{stock.enName}</CompanyName>
              </StockListItem>
            </NewStockListGroup>
          </ListWrapper>
        ))
      ) : (
        <EmptyWrapper>검색 결과가 없습니다.</EmptyWrapper>
      )}
    </>
  )
}
