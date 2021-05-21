import styled from '@emotion/styled'
import React from 'react'
import CloseIconSmall from '../../assets/svg/CloseIconSmall'
import { useRootState } from '../../hooks/useRootState'
import { grey030 } from '../../mds/styled/colors'

const Wrapper = styled.div`
  margin: 10px 0;

  width: 100%;
  height: 260px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  border: 1px solid ${grey030};
  border-radius: 8px;
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

export default function PreviewImage() {
  const { previewUrl } = useRootState((state) => state.post)
  return (
    <>
      {previewUrl ? (
        <Wrapper>
          <Image src={previewUrl.toString()} alt={'upload-preview'}></Image>
          <CloseButton>
            <CloseIconSmall />
          </CloseButton>
        </Wrapper>
      ) : (
        ''
      )}
    </>
  )
}
