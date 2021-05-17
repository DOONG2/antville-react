import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getSearch from '../../api/tenor/getSearch'
import BackIcon from '../../assets/svg/BackIcon'
import SearchIcon from '../../assets/svg/SearchIcon'
import { useRootState } from '../../hooks/useRootState'
import randomColor from '../../lib/randomColor'
import { IconWrapper, SearchInput, SerchBar } from '../../mds/styled/searchBar'
import postSlice from '../../reducers/Slices/post'

const Item = styled.div<{ backGroundColor?: string }>`
  position: relative;
  cursor: pointer;
  height: 200px;

  background-color: ${(p) => p.backGroundColor};
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row dense;

  position: relative;
  padding-top: 25px;
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

const GifForm = () => {
  const { categorys, gifs, query } = useRootState((state) => state.post)
  const { setGifs, setQuery } = postSlice.actions

  const dispatch = useDispatch()

  const searchApi = async (word: string) => {
    const result = await getSearch(word)

    dispatch(setGifs(result))
  }

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
                if (e.target.value === '') return dispatch(setGifs(null))
                searchApi(e.target.value)
              }}
              value={query}
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
                  console.log(gif)
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
                  searchApi(category.searchterm)
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
    </>
  )
}

export default GifForm
