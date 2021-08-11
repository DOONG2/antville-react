import styled from '@emotion/styled'
import { RefObject } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../lib/api/post/types'
import { getCategoriesResponse } from '../../lib/api/tenor/types'
import randomColor from '../../lib/randomColor'
import formSlice from '../../reducers/Slices/form'
import viewSlice from '../../reducers/Slices/view'
import BackIcon from '../../static/svg/BackIcon'
import { useRootState } from '../common/hooks/useRootState'

type GifViewProps = {
  categorys?: getCategoriesResponse
  query: string
  isFetching: boolean
  setUploadImage(value?: File): void
  setGifDto(value?: gifDto): void
  setPreviewUrl(value?: string | ArrayBuffer): void
  modalParentRef: RefObject<HTMLDivElement>
}

export default function GifView({
  categorys,
  modalParentRef,
  query,
  isFetching,
  setUploadImage,
  setGifDto,
  setPreviewUrl,
}: GifViewProps) {
  const { setIsOpenGifForm } = viewSlice.actions
  const { gifs } = useRootState((state) => state.form)
  const { setGifs, setQuery } = formSlice.actions
  const dispatch = useDispatch()
  if (query !== '' || isFetching)
    return (
      <>
        <ResetWrapper
          onClick={() => {
            dispatch(setGifs(undefined))
            dispatch(setQuery(''))
          }}
        >
          <BackIcon />
        </ResetWrapper>
        {gifs?.map((gif) => (
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
    )

  return (
    <>
      {categorys?.tags.map((category) => (
        <Item
          key={`${category.name}-gif-form-category`}
          onClick={() => {
            dispatch(setQuery(category.searchterm))
            modalParentRef.current?.scrollTo(0, 0)
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
  )
}

const Item = styled.div<{ backGroundColor?: string }>`
  position: relative;
  cursor: pointer;
  height: 200px;

  background-color: ${(p) => p.backGroundColor};
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

const ResetWrapper = styled.div`
  position: absolute;
  width: 30px;
  top: -26px;
  left: 25px;
  cursor: pointer;

  display: flex;
  justify-content: center;
`
