import styled from '@emotion/styled'
import { ChangeEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import postSlice from '../../reducers/Slices/post'

const Input = styled.input`
  display: none;
`

const ImageUpload = () => {
  const dispatch = useDispatch()
  const { setPreviewUrl } = postSlice.actions
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    hiddenFileInput?.current?.click()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0]
    if (fileUploaded === undefined) return
    dispatch(setPreviewUrl(URL.createObjectURL(fileUploaded)))

    console.log(fileUploaded)
  }

  return (
    <>
      <Input
        id="imageFile"
        name="file"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
      <PictureUploadButton onClick={handleClick} />
    </>
  )
}

export default ImageUpload
