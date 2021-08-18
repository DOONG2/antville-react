import styled from '@emotion/styled'
import { useState } from 'react'
import { Image } from '../../lib/styles/post'
import Modal from '../common/Modal'

type Props = {
  url: string
}
export default function ImageComponent({ url }: Props) {
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)

  return (
    <>
      <Image
        onClick={() => setIsOpenImageModal(true)}
        src={url}
        alt={`feed-image`}
        style={{ objectFit: 'cover' }}
      />
      <Modal
        shown={isOpenImageModal}
        close={() => {
          setIsOpenImageModal(false)
        }}
      >
        <ImageWrapper>
          <DetailImage src={url} alt={`feed-image-detail`} />
        </ImageWrapper>
      </Modal>
    </>
  )
}

const ImageWrapper = styled.div`
  border-radius: 2%;
`

const DetailImage = styled.img`
  margin: 0 auto;
  max-width: 1200px;
  max-height: 900px;
`
