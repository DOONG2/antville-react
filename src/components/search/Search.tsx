import { useDispatch } from 'react-redux'
import HeaderSearchIcon from '../../static/svg/HeaderSearchIcon'
import useOnClickOutside from '../common/hooks/useOnClickOutside'
import { useRootState } from '../common/hooks/useRootState'
import { SearchInput, SerchBar } from '../../lib/styles/search'
import viewSlice from '../../reducers/Slices/view'
import SearchPreView from './SearchPreView'
import searchSlice from '../../reducers/Slices/search'

function Search() {
  const { setIsFocusSearchBar, setIsOpenSearchBar } = viewSlice.actions
  const { isOpenSearchBar } = useRootState((state) => state.view)
  const { query } = useRootState((state) => state.search)
  const { setQuery } = searchSlice.actions
  const dispatch = useDispatch()

  const outSideClickRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenSearchBar(false))
    },
    isOpen: isOpenSearchBar,
  })

  return (
    <SerchBar ref={outSideClickRef}>
      <HeaderSearchIcon />
      <SearchInput
        type="search"
        placeholder="찾으시는 종목명 혹은 닉네임을 검색해보세요!"
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
