import styled from '@emotion/styled'
import Search from './Search'
import SearchPreview from './SearchPreView'

function SearchModal() {
  return (
    <>
      <SearchBarWrapper>
        <Search />
      </SearchBarWrapper>
      <SearchPreview />
    </>
  )
}

const SearchBarWrapper = styled.div`
  margin: 3rem auto;
`

export default SearchModal
