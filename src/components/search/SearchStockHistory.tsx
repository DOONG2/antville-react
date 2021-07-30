import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import searchStorage from '../../lib/searchStorage'
import {
  EmptyWrapper,
  HistoryIconWrapper,
  HoverListWrapper,
  NewStockListGroup,
} from '../../lib/styles/search'
import {
  CompanyName,
  StockListItem,
  StockName,
} from '../../lib/styles/stockList'
import searchSlice from '../../reducers/Slices/search'
import viewSlice from '../../reducers/Slices/view'
import CloseIconGrey from '../../static/svg/CloseIconGrey'
import { useRootState } from '../common/hooks/useRootState'

export default function SearchStockHistory() {
  const { stocks } = useRootState((state) => state.search.history)
  const { setHistoryStocks } = searchSlice.actions
  const { setIsFocusSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()
  const { setHistoryStocks: set, getHistoryStocks: get } = searchStorage
  return (
    <>
      {stocks ? (
        stocks.slice(0, 5).map((stock) => (
          <HoverListWrapper
            key={`${stock.id}-search-bar`}
            onClick={() => {
              history.push(`/stock/${stock.cashTagName}`)
              set(stock)
              dispatch(setHistoryStocks(get()))
              dispatch(setIsFocusSearchBar(false))
            }}
          >
            <NewStockListGroup>
              <StockListItem>
                <StockName>{stock.cashTagName}</StockName>
              </StockListItem>
              <StockListItem>
                <CompanyName>{stock.enName}</CompanyName>
              </StockListItem>
            </NewStockListGroup>
            <HistoryIconWrapper
              onClick={(e) => {
                e.stopPropagation()
                searchStorage.deleteStock(stock.cashTagName)
                dispatch(setHistoryStocks(get()))
              }}
            >
              <CloseIconGrey />
            </HistoryIconWrapper>
          </HoverListWrapper>
        ))
      ) : (
        <EmptyWrapper>최근 검색 종목이 없습니다.</EmptyWrapper>
      )}
    </>
  )
}
