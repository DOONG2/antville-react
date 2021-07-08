import styled from '@emotion/styled'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Stock } from '../../api/types'
import CloseIconGrey from '../../assets/svg/CloseIconGrey'
import { useRootState } from '../../hooks/useRootState'
import searchStorage from '../../lib/searchStorage'
import { grey040, grey080 } from '../../mds/styled/colors'
import {
  CompanyName,
  StockListGroup,
  StockListHeader,
  StockListItem,
  StockListWrapper,
  StockName,
} from '../../mds/styled/stockList'
import useSearchStocks from '../../hooks/useSearchStocks'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'

type Props = {
  query: string
}

const HotStockListWrapper = styled(StockListWrapper)<{ isOpen: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 2;
`

const Title = styled.div``

const Button = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 10px;
  line-height: 0;

  color: #ffffff;
  background: ${grey040};
  border-radius: 46px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;

  cursor: pointer;
`

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.5px solid #f0f0f0;
`

const IconWrapper = styled.div`
  margin-right: 22px;
  cursor: pointer;
`

const NewStockListGroup = styled(StockListGroup)`
  width: 100%;
  border: none;
  cursor: pointer;
`

const EmptyWrapper = styled.div`
  padding: 93px 75px 133px 75px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: ${grey080};
`

export default function SearchPreview({ query }: Props) {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setIsFocusSearchBar } = viewSlice.actions
  const history = useHistory()
  const dispatch = useDispatch()
  const { set, get, clear } = searchStorage

  const [searchedHistory, setSearchedHistory] = useState(get())
  const [searchedStocks, setSearchedStocks] = useState<Stock[]>()
  const { isLoading } = useSearchStocks({ query, setSearchedStocks })

  if (isLoading) return <></>

  if (query === '')
    return (
      <>
        <HotStockListWrapper isOpen={isFocusSearchBar}>
          <StockListHeader>
            <Title>최근 검색어</Title>
            <Button
              onClick={() => {
                clear()
                setSearchedHistory(get())
              }}
            >
              전체삭제
            </Button>
          </StockListHeader>
          {searchedHistory ? (
            searchedHistory.map((stock) => (
              <ListWrapper key={`${stock.id}-search-bar`}>
                <NewStockListGroup
                  onClick={() => {
                    history.push(`/stock/${stock.cashTagName}`)
                    set(stock)
                    setSearchedHistory(get())
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
                <IconWrapper
                  onClick={(e) => {
                    e.stopPropagation()
                    searchStorage.delete(stock.cashTagName)
                    setSearchedHistory(get())
                  }}
                >
                  <CloseIconGrey />
                </IconWrapper>
              </ListWrapper>
            ))
          ) : (
            <EmptyWrapper>최근 검색 내역이 없습니다.</EmptyWrapper>
          )}
          {}
        </HotStockListWrapper>
      </>
    )
  if (!searchedStocks) return <></>
  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
        <StockListHeader>
          <Title>종목</Title>
        </StockListHeader>
        {searchedStocks.length >= 1 ? (
          searchedStocks.map((stock) => (
            <ListWrapper key={`${stock.id}-search-bar`}>
              <NewStockListGroup
                onClick={() => {
                  history.push(`/stock/${stock.cashTagName}`)
                  set(stock)
                  setSearchedHistory(get())
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
      </HotStockListWrapper>
    </>
  )
}
