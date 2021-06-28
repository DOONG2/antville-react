import styled from '@emotion/styled'
import React from 'react'
import CloseIconSmall from '../../assets/svg/CloseIconSmall'
import { grey030 } from '../../mds/styled/colors'
import { Image } from '../../mds/styled/post'

interface Props {
  previewUrl?: string | ArrayBuffer | null
  setPreviewUrl: (value: string | ArrayBuffer | null) => void
}

const Wrapper = styled.div`
  margin: 10px 0;

  width: 100%;
  height: 100%;

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

export default function PreviewImage({ setPreviewUrl, previewUrl }: Props) {
  return (
    <>
      {previewUrl ? (
        <Wrapper>
          <Image src={previewUrl.toString()} alt={'upload-preview'}></Image>
          <CloseButton onClick={() => setPreviewUrl(null)}>
            <CloseIconSmall />
          </CloseButton>
        </Wrapper>
      ) : (
        ''
      )}
    </>
  )
}
