import styled from '@emotion/styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../../assets/svg/SearchIcon'
import useStockPopularQuery from '../../hooks/query/useStockPopularQuery'
import useCheckLogin from '../../hooks/useCheckLogin'
import { useRootState } from '../../hooks/useRootState'
import { IconWrapper, SearchInput, SerchBar } from '../../mds/styled/searchBar'
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
import viewSlice from '../../reducers/Slices/view'

const HotStockListWrapper = styled(StockListWrapper)<{ isOpen: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 2;
`

const SearchBar = () => {
  const dispatch = useDispatch()
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setIsFocusSearchBar } = viewSlice.actions

  const { isLoading, data } = useStockPopularQuery()
  const isLoggedIn = useCheckLogin()

  return (
    <SerchBar isLoggedIn={isLoggedIn}>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput
        type="search"
        placeholder="키워드 혹은 @닉네임을 입력해주세요."
        onFocus={() => dispatch(setIsFocusSearchBar(true))}
        onBlur={() => dispatch(setIsFocusSearchBar(false))}
      />
      {isLoading ? (
        ''
      ) : (
        <HotStockListWrapper isOpen={isFocusSearchBar}>
          <StockListHeader>실시간 인기 종목</StockListHeader>
          {data?.stocks.map((stock) => (
            <StockListGroup key={`${stock.id}-search-bar`}>
              <StockListItem>
                <StockName>{stock.krName}</StockName>
                <StockPrice>₩64,551,100</StockPrice>
              </StockListItem>
              <StockListItem>
                <CompanyName>{stock.symbol}/KRW</CompanyName>
                <UpDownRate>
                  <UpDownIcon>*</UpDownIcon>20.21 (-2.91%)
                </UpDownRate>
              </StockListItem>
            </StockListGroup>
          ))}
        </HotStockListWrapper>
      )}
    </SerchBar>
  )
}

export default SearchBar
