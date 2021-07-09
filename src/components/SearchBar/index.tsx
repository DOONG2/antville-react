import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../../assets/svg/SearchIcon'
import useCheckLogin from '../../hooks/useCheckLogin'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { useRootState } from '../../hooks/useRootState'
import { IconWrapper, SearchInput, SerchBar } from '../../mds/styled/searchBar'
import viewSlice from '../../reducers/Slices/view'
import SearchPreView from './SearchPreView'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { setIsFocusSearchBar } = viewSlice.actions
  const { isFocusSearchBar } = useRootState((state) => state.view)

  const isLoggedIn = useCheckLogin()

  const [query, setQuery] = useState('')

  const outSideClickRef = useOnClickOutside({
    close: () => {
      if (isFocusSearchBar) dispatch(setIsFocusSearchBar(false))
    },
    isOpen: isFocusSearchBar,
  })

  return (
    <SerchBar isLoggedIn={isLoggedIn} ref={outSideClickRef}>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput
        type="search"
        placeholder="키워드 혹은 @닉네임을 입력해주세요."
        onFocus={() => dispatch(setIsFocusSearchBar(true))}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <SearchPreView query={query} />
    </SerchBar>
  )
}

export default SearchBar
