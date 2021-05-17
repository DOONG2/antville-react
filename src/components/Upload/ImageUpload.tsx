import styled from '@emotion/styled'
import { ChangeEvent, useRef } from 'react'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'

const Input = styled.input`
  display: none;
`

const ImageUpload = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    hiddenFileInput?.current?.click()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0]
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
