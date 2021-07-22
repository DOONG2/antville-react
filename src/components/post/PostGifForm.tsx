import styled from '@emotion/styled'
import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../lib/api/post/types'
import getSearch from '../../lib/api/tenor/getSearch'
import BackIcon from '../../static/svg/BackIcon'
import SearchIcon from '../../static/svg/SearchIcon'
import { useRootState } from '../common/hooks/useRootState'
import randomColor from '../../lib/randomColor'
import { IconWrapper, SearchInput, SerchBar } from '../../lib/styles/searchBar'
import postSlice from '../../reducers/Slices/post'
import viewSlice from '../../reducers/Slices/view'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value: string | ArrayBuffer | null): void
}

function PostGifForm({ setGifDto, setUploadImage, setPreviewUrl }: Props) {
  const { categorys, gifs, query } = useRootState((state) => state.post)
  const { setGifs, setQuery } = postSlice.actions
  const { setIsOpenGifForm } = viewSlice.actions
  const [isFocus, setIsFocus] = useState(false)

  const dispatch = useDispatch()

  //TODO : 아래로직 훅으로 빼기
  const searchApi = async (term: string) => {
    const result = await getSearch(term)
    dispatch(setGifs(result))
  }

  const debouncedSearch = useCallback(
    debounce((term) => searchApi(term), 300),
    []
  )

  useEffect(() => {
    if (query !== '') {
      if (isFocus === true) {
        debouncedSearch(query)
      } else {
        searchApi(query)
      }
    }
  }, [debouncedSearch, query])

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
                dispatch(setQuery(e.target.value))
                if (query === '') return dispatch(setGifs(null))
              }}
              value={query}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </NewSerchBar>
        </SearchBarWrapper>
        {gifs ? (
          <>
            <ResetWrapper
              onClick={() => {
                dispatch(setGifs(null))
                dispatch(setQuery(''))
              }}
            >
              <BackIcon />
            </ResetWrapper>
            {gifs.results.map((gif) => (
              <Item
                key={`${gif.id}-gif-form`}
                onClick={() => {
                  setGifDto({
                    gifId: gif.id,
                    tinyGifUrl: gif.media[0].tinygif.url,
                    gifUrl: gif.media[0].gif.url,
                    ratio: gif.media[0].gif.dims[0] / gif.media[0].gif.dims[1],
                  })
                  setUploadImage(undefined)
                  setPreviewUrl(gif.media[0].gif.preview)
                  dispatch(setIsOpenGifForm(false))
                  dispatch(setGifs(null))
                  dispatch(setQuery(''))
                }}
                backGroundColor={randomColor()}
              >
                <GifImage
                  src={`${gif.media[0].gif.url}`}
                  alt="gif_search"
                ></GifImage>
              </Item>
            ))}
          </>
        ) : (
          <>
            {categorys?.tags.map((category) => (
              <Item
                key={`${category.name}-gif-form`}
                onClick={() => {
                  dispatch(setQuery(category.searchterm))
                }}
              >
                <GifImageBright
                  src={`${category.image}`}
                  alt="gif_category"
                ></GifImageBright>
                <Label>{category.name}</Label>
              </Item>
            ))}
          </>
        )}
      </Group>
      <NewGroup>
        <Item backGroundColor={randomColor()} />
        <Item backGroundColor={randomColor()} />
        <Item backGroundColor={randomColor()} />
      </NewGroup>
    </>
  )
}

const Item = styled.div<{ backGroundColor?: string }>`
  position: relative;
  cursor: pointer;
  height: 200px;

  background-color: ${(p) => p.backGroundColor};
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  position: relative;
  padding-top: 25px;
`

const NewGroup = styled(Group)`
  padding-top: 0;
`

const GifImage = styled.img`
  width: 100%;
  height: 100%;
`

const GifImageBright = styled(GifImage)`
  filter: brightness(70%);

  &:hover {
    filter: brightness(95%);
  }
`

const Label = styled.div`
  position: absolute;

  z-index: 2;

  font-size: 20px;
  font-weight: 900;

  bottom: 0;
  left: 0;

  margin: 10%;

  color: #ffffff;
`

const SearchBarWrapper = styled.div`
  position: absolute;
  top: -37px;
  left: 85px;
`

const ResetWrapper = styled.div`
  position: absolute;
  width: 30px;
  top: -26px;
  left: 25px;
  cursor: pointer;

  display: flex;
  justify-content: center;
`

const NewSerchBar = styled(SerchBar)`
  width: 475px;
`

export default PostGifForm
