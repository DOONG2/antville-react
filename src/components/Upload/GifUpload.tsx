import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../lib/api/post/types'
import getCategories from '../../lib/api/tenor/getCategories'
import GifUploadButton from '../../static/svg/GifUploadButton'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import GifForm from './GifForm'
import Modal from '../common/Modal'
import { getCategoriesResponse } from '../../lib/api/tenor/types'

interface Props {
  setUploadImage(value?: File): void
  setGifDto(value?: gifDto): void
  setPreviewUrl(value: string | ArrayBuffer | null): void
  query?: string
}

const GifUpload = ({ setUploadImage, setGifDto, setPreviewUrl }: Props) => {
  const {
    view: { isOpenGifForm },
  } = useRootState((state) => state)
  const [categorys, setCategorys] = useState<getCategoriesResponse>()
  const { setIsOpenGifForm } = viewSlice.actions

  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpenGifForm) {
      const callApi = async () => {
        const data = await getCategories()
        setCategorys(data)
      }
      callApi()
    }
  }, [isOpenGifForm])

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
          }}
        >
          <GifForm
            setUploadImage={setUploadImage}
            setGifDto={setGifDto}
            setPreviewUrl={setPreviewUrl}
            categorys={categorys}
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
