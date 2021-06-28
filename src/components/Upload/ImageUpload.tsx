import styled from '@emotion/styled'
import { ChangeEvent, useRef } from 'react'
import { gifDto } from '../../api/post/types'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value: string | ArrayBuffer | null): void
}

const Input = styled.input`
  display: none;
`

const ImageUpload = ({ setUploadImage, setGifDto, setPreviewUrl }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    hiddenFileInput?.current?.click()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0]
    if (fileUploaded === undefined) return
    setPreviewUrl(URL.createObjectURL(fileUploaded))
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
