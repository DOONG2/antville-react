import styled from '@emotion/styled'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../lib/api/post/types'
import GifUploadButton from '../../static/svg/GifUploadButton'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import GifForm from './GifForm'
import Modal from '../common/Modal'
import useGetTenorCategories from './hooks/useGetTenorCategories'
import formSlice from '../../reducers/Slices/form'

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
  const { categorys } = useGetTenorCategories()
  const { setIsOpenGifForm } = viewSlice.actions
  const { setGifs, setQuery } = formSlice.actions
  const modalParentRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  return (
    <>
      <Wrapper
        onClick={() => {
          dispatch(setIsOpenGifForm(true))
          dispatch(setGifs(undefined))
          dispatch(setQuery(''))
        }}
      >
        <GifUploadButton />
      </Wrapper>
      <DefaultCursor>
        <Modal
          modalParentRef={modalParentRef}
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
            modalParentRef={modalParentRef}
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
