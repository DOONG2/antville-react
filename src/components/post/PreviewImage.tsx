import styled from '@emotion/styled'
import CloseIconSmall from '../../static/svg/CloseIconSmall'
import { grey030 } from '../../lib/styles/colors'
import { Image } from '../../lib/styles/post'
import { gifDto } from '../../lib/api/post/types'

interface Props {
  previewUrl?: string | ArrayBuffer | null
  setPreviewUrl: (value: string | ArrayBuffer | null) => void
  setUploadImage: (value: File | undefined) => void
  setGifDto: (value: gifDto | undefined) => void
}

export default function PreviewImage({
  setPreviewUrl,
  previewUrl,
  setUploadImage,
  setGifDto,
}: Props) {
  return (
    <>
      {previewUrl ? (
        <Wrapper>
          <Image src={previewUrl.toString()} alt={'upload-preview'}></Image>
          <CloseButton
            onClick={() => {
              setPreviewUrl(null)
              setUploadImage(undefined)
              setGifDto(undefined)
            }}
          >
            <CloseIconSmall />
          </CloseButton>
        </Wrapper>
      ) : (
        ''
      )}
    </>
  )
}

const Wrapper = styled.div`
  margin: 10px 0;
  width: 100%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseButton = styled.div`
  position: absolute;
  margin: 15px;
  padding: 3px;
  right: 0;
  top: 0;

  cursor: pointer;
  background-color: #fff;
  border: 1px solid ${grey030};
  border-radius: 32px;

  &:hover {
    background-color: ${grey030};
  }
`
