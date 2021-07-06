import styled from '@emotion/styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../../assets/svg/SearchIcon'
import useCheckLogin from '../../hooks/useCheckLogin'
import { IconWrapper, SearchInput, SerchBar } from '../../mds/styled/searchBar'
import viewSlice from '../../reducers/Slices/view'
import PopularPreView from './PopularPreView'
import SearchPreView from './SearchPreView'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { setIsFocusSearchBar } = viewSlice.actions

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
        onChange={() => {}}
      />
      {isLoggedIn ? <SearchPreView /> : <PopularPreView />}
    </SerchBar>
  )
}

export default SearchBar
