import styled from '@emotion/styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../../assets/svg/SearchIcon'
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

const HotStockList = styled.div``

const SearchBar = () => {
  const dispatch = useDispatch()
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setIsFocusSearchBar } = viewSlice.actions
  return (
    <>
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
      </SerchBar>
      <HotStockList></HotStockList>
    </>
  )
}

export default SearchBar
