import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../../static/svg/SearchIcon'
import useCheckLogin from '../common/hooks/useCheckLogin'
import useOnClickOutside from '../common/hooks/useOnClickOutside'
import { useRootState } from '../common/hooks/useRootState'
import { IconWrapper, SearchInput, SerchBar } from '../../lib/styles/search'
import viewSlice from '../../reducers/Slices/view'
import SearchPreView from './SearchPreView'

function Search() {
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
        placeholder="키워드 혹은 닉네임을 입력해주세요."
        onFocus={() => dispatch(setIsFocusSearchBar(true))}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      {isFocusSearchBar && <SearchPreView query={query} />}
    </SerchBar>
  )
}

export default Search
