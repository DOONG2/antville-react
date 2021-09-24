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
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`

export default SearchModal
