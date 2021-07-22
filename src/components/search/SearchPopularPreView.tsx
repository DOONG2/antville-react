import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useStockPopularQuery from '../stock/hooks/useStockPopularQuery'
import { useRootState } from '../common/hooks/useRootState'
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
} from '../../lib/styles/stockList'
import viewSlice from '../../reducers/Slices/view'

export default function PopularPreView() {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setIsFocusSearchBar } = viewSlice.actions
  const history = useHistory()
  const dispatch = useDispatch()
  const { data } = useStockPopularQuery()

  if (!data) return <></>

  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
        <StockListHeader>실시간 인기 종목</StockListHeader>
        {data?.stocks.map((stock) => (
          <NewStockListGroup
            key={`${stock.id}-search-bar`}
            onClick={() => {
              dispatch(setIsFocusSearchBar(false))
              history.push(`/stock/${stock.cashTagName}`)
            }}
          >
            <StockListItem>
              <StockName>{stock.cashTagName}</StockName>
              <StockPrice>₩64,551,100</StockPrice>
            </StockListItem>
            <StockListItem>
              <CompanyName>{stock.enName}</CompanyName>
              <UpDownRate>
                <UpDownIcon>*</UpDownIcon>20.21 (-2.91%)
              </UpDownRate>
            </StockListItem>
          </NewStockListGroup>
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

const NewStockListGroup = styled(StockListGroup)`
  cursor: pointer;
`
