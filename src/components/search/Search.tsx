import { useDispatch } from 'react-redux'
import SearchIcon from '../../static/svg/SearchIcon'
import useCheckLogin from '../common/hooks/useCheckLogin'
import useOnClickOutside from '../common/hooks/useOnClickOutside'
import { useRootState } from '../common/hooks/useRootState'
import { IconWrapper, SearchInput, SerchBar } from '../../lib/styles/search'
import viewSlice from '../../reducers/Slices/view'
import SearchPreView from './SearchPreView'
import searchSlice from '../../reducers/Slices/search'

function Search() {
  const { setIsFocusSearchBar, setIsOpenSearchBar } = viewSlice.actions
  const { isOpenSearchBar } = useRootState((state) => state.view)
  const { query } = useRootState((state) => state.search)
  const { setQuery } = searchSlice.actions
  const dispatch = useDispatch()

  const isLoggedIn = useCheckLogin()

  const outSideClickRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenSearchBar(false))
    },
    isOpen: isOpenSearchBar,
  })

  console.log('component ', isOpenSearchBar)

  return (
    <SerchBar isLoggedIn={isLoggedIn} ref={outSideClickRef}>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput
        type="search"
        placeholder="종목명 혹은 닉네임을 입력해주세요."
        onFocus={() => {
          dispatch(setIsFocusSearchBar(true))
          dispatch(setIsOpenSearchBar(true))
        }}
        onChange={(e) => {
          dispatch(setQuery(e.target.value))
        }}
        onBlur={() => dispatch(setIsFocusSearchBar(false))}
        value={query}
      />
      {isOpenSearchBar && <SearchPreView />}
    </SerchBar>
  )
}

export default Search
