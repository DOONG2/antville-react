import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../lib/api/post/types'
import getCategories from '../../lib/api/tenor/getCategories'
import GifUploadButton from '../../static/svg/GifUploadButton'
import { useRootState } from '../common/hooks/useRootState'
import postSlice from '../../reducers/Slices/post'
import viewSlice from '../../reducers/Slices/view'
import GifForm from '../post/PostGifForm'
import Modal from '../common/Modal'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value: string | ArrayBuffer | null): void
}

const GifUpload = ({ setUploadImage, setGifDto, setPreviewUrl }: Props) => {
  const {
    view: { isOpenGifForm },
    post: { query },
  } = useRootState((state) => state)
  const { setCategorys, setGifs, setQuery } = postSlice.actions
  const { setIsOpenGifForm } = viewSlice.actions

  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpenGifForm) {
      const callApi = async () => {
        const data = await getCategories()

        dispatch(setCategorys(data))
      }
      callApi()
    }
  }, [isOpenGifForm, dispatch, setCategorys])

  return (
    <>
      <Wrapper onClick={() => dispatch(setIsOpenGifForm(true))}>
        <GifUploadButton />
      </Wrapper>
      <DefaultCursor>
        <Modal
          shown={isOpenGifForm}
          width="66rem"
          height="66rem"
          close={() => {
            dispatch(setIsOpenGifForm(false))
            dispatch(setGifs(null))
            dispatch(setQuery(''))
          }}
          scrollValue={query}
        >
          <GifForm
            setUploadImage={setUploadImage}
            setGifDto={setGifDto}
            setPreviewUrl={setPreviewUrl}
          />
        </Modal>
      </DefaultCursor>
    </>
  )
}

const Wrapper = styled.div``

const DefaultCursor = styled.div`
  cursor: default;
`

export default GifUpload
