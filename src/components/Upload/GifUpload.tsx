import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../api/post/types'
import getCategories from '../../api/tenor/getCategories'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import { useRootState } from '../../hooks/useRootState'
import Modal from '../../mds/Modal'
import postSlice from '../../reducers/Slices/post'
import viewSlice from '../../reducers/Slices/view'
import GifForm from '../Form/GifForm'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value: string | ArrayBuffer | null): void
}
const Wrapper = styled.div``

const DefaultCursor = styled.div`
  cursor: default;
`

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

export default GifUpload
