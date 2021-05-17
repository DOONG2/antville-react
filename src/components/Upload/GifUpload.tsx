import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCategories from '../../api/tenor/getCategories'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import { useRootState } from '../../hooks/useRootState'
import Modal from '../../mds/Modal'
import postSlice from '../../reducers/Slices/post'
import viewSlice from '../../reducers/Slices/view'
import GifForm from '../Form/GifForm'

const Wrapper = styled.div``

const DefaultCursor = styled.div`
  cursor: default;

  position: relative;
`

const SearchBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const GifUpload = () => {
  const { isOpenGifForm } = useRootState((state) => state.view)
  const { setGif } = postSlice.actions
  const { setIsOpenGifForm } = viewSlice.actions

  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpenGifForm) {
      const callApi = async () => {
        const data = await getCategories()

        dispatch(setGif(data))
      }
      callApi()
    }
  }, [isOpenGifForm, dispatch, setGif])

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
          <SearchBar>써치바</SearchBar>
          <GifForm />
        </Modal>
      </DefaultCursor>
    </>
  )
}

export default GifUpload
