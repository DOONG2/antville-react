import styled from '@emotion/styled'
import { RefObject } from 'react'
import { gifDto } from '../../lib/api/post/types'
import getSearch from '../../lib/api/tenor/getSearch'
import SearchIcon from '../../static/svg/SearchIcon'
import { SearchInput, SearchBar } from '../../lib/styles/search'
import { getCategoriesResponse } from '../../lib/api/tenor/types'
import GifView from './GifView'
import useInfiniteGif from './hooks/useInfiniteGif'
import useDebounce from '../common/hooks/useDebounce'
import { useRootState } from '../common/hooks/useRootState'
import formSlice from '../../reducers/Slices/form'
import { useDispatch } from 'react-redux'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value?: string | ArrayBuffer): void
  categorys?: getCategoriesResponse
  modalParentRef: RefObject<HTMLDivElement>
}

function GifForm({
  setGifDto,
  setUploadImage,
  setPreviewUrl,
  categorys,
  modalParentRef,
}: Props) {
  const { query } = useRootState((state) => state.form)
  const { setGifs, setQuery } = formSlice.actions
  const dispatch = useDispatch()

  const debouncedQuery = useDebounce(query, 300)

  const { isFetching } = useInfiniteGif({
    key: `gifs-${debouncedQuery}`,
    callback: (cursor) => getSearch(debouncedQuery, cursor),
    query: debouncedQuery,
    ref: modalParentRef,
  })

  return (
    <>
      <SearchBarWrapper>
        <SearchBar>
          <SearchIcon />
          <SearchInput
            type="search"
            placeholder="Tener에서 검색하기"
            onChange={(e) => {
              dispatch(setQuery(e.target.value))
              if (e.target.value === '') dispatch(setGifs(undefined))
            }}
            value={query}
          />
        </SearchBar>
      </SearchBarWrapper>
      <Group>
        <GifView
          query={debouncedQuery}
          isFetching={isFetching}
          categorys={categorys}
          setPreviewUrl={setPreviewUrl}
          setGifDto={setGifDto}
          setUploadImage={setUploadImage}
          modalParentRef={modalParentRef}
        />
      </Group>
    </>
  )
}

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const SearchBarWrapper = styled.div`
  margin: 2.5rem auto 1rem auto;
`

export default GifForm
