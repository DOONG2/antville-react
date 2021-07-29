import styled from '@emotion/styled'
import { RefObject, useState } from 'react'
import { gifDto } from '../../lib/api/post/types'
import getSearch from '../../lib/api/tenor/getSearch'
import SearchIcon from '../../static/svg/SearchIcon'
import { IconWrapper, SearchInput, SerchBar } from '../../lib/styles/search'
import { getCategoriesResponse } from '../../lib/api/tenor/types'
import GifView from './GifView'
import useInfiniteGif from './hooks/useInfiniteGif'
import useDebounce from '../common/hooks/useDebounce'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value: string | ArrayBuffer | null): void
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
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce(query, 300)

  const { gifs, setGifs, isFetching } = useInfiniteGif({
    key: `gifs-${debouncedQuery}`,
    callback: (cursor) => getSearch(debouncedQuery, cursor),
    query: debouncedQuery,
    ref: modalParentRef,
  })

  return (
    <>
      <Group>
        <SearchBarWrapper>
          <NewSerchBar isLoggedIn={true}>
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
            <SearchInput
              type="search"
              placeholder=""
              onChange={(e) => {
                setQuery(e.target.value)
                if (e.target.value === '') setGifs(undefined)
              }}
              value={query}
            />
          </NewSerchBar>
        </SearchBarWrapper>
        <GifView
          gifs={gifs}
          query={debouncedQuery}
          isFetching={isFetching}
          setGifs={setGifs}
          setQuery={setQuery}
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

  position: relative;
  padding-top: 25px;
`

const SearchBarWrapper = styled.div`
  position: absolute;
  top: -37px;
  left: 85px;
`

const NewSerchBar = styled(SerchBar)`
  width: 475px;
`

export default GifForm
