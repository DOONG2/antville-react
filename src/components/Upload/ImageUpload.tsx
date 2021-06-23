import styled from '@emotion/styled'
import { ChangeEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { gifDto } from '../../api/post/types'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import postSlice from '../../reducers/Slices/post'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
}

const Input = styled.input`
  display: none;
`

const ImageUpload = ({ setUploadImage, setGifDto }: Props) => {
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
    setUploadImage(fileUploaded)
    setGifDto(undefined)
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
