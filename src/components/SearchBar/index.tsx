import styled from '@emotion/styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../../assets/svg/SearchIcon'
import useStockPopularQuery from '../../hooks/query/useStockPopularQuery'
import { useRootState } from '../../hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'

const SerchBar = styled.div`
  width: 33rem;
  height: 4rem;
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 1.3rem;
  left: 1.4rem;
`

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 4rem 0.8rem 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;

  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 3px;

  color: #202020;

  ::placeholder {
    color: #aeaeae;
  }
`

const HotStockList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
`

const ListTitle = styled.div`
  color: #202020;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  padding: 1rem;
  border-bottom: 0.5px solid #0076e1;
`

const Items = styled.div`
  display: grid;
  padding: 1rem;

  border-bottom: 0.5px solid #f0f0f0;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StockName = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  color: #202020;
`

const StockPrice = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-align: right;

  color: #424242;
`

const CompanyName = styled.div`
  font-family: Roboto;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: #757575;
`

const UpDownRate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  color: #3082f5;
`

const UpDownIcon = styled.div`
  display: inline;
`

const SearchBar = () => {
  const dispatch = useDispatch()
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setIsFocusSearchBar } = viewSlice.actions

  const { isLoading, error, data, isFetching } = useStockPopularQuery()

  return (
    <SerchBar>
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
        <HotStockList isOpen={isFocusSearchBar}>
          <ListTitle>실시간 인기 종목</ListTitle>
          {data?.stocks.map((stock) => (
            <Items key={`${stock.id}-stock-popular`}>
              <Item>
                <StockName>{stock.krName}</StockName>
                <StockPrice>₩64,551,100</StockPrice>
              </Item>
              <Item>
                <CompanyName>{stock.symbol}/KRW</CompanyName>
                <UpDownRate>
                  <UpDownIcon>*</UpDownIcon>20.21 (-2.91%)
                </UpDownRate>
              </Item>
            </Items>
          ))}
        </HotStockList>
      )}
    </SerchBar>
  )
}

export default SearchBar
