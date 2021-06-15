import styled from '@emotion/styled'
import React from 'react'
import CommentArrow from '../../assets/svg/CommentArrow'
import { grey060 } from '../../mds/styled/colors'

interface Props {
  parentCommentId: number
  nextCommentCount: number
}

const ExtendWrapper = styled.div`
  padding-top: 7px;
  display: flex;
  align-items: center;

  padding-left: 97px;

  padding-bottom: 12px;
`

const ExtendButton = styled.div`
  padding-left: 10px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;

  color: ${grey060};

  cursor: pointer;
`

export default function SubCommentComponent({
  parentCommentId,
  nextCommentCount,
}: Props) {
  return (
    <>
      <ExtendWrapper>
        <CommentArrow />
        <ExtendButton>답글 {nextCommentCount}개 보기</ExtendButton>
      </ExtendWrapper>
    </>
  )
}
