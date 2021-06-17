import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import CommentArrow from '../../assets/svg/CommentArrow'
import TalkIcon from '../../assets/svg/TalkIcon'
import useSubCommentsById from '../../hooks/useSubCommentsById'
import { grey060 } from '../../mds/styled/colors'
import {
  BottomItem,
  BottomWrapper,
  Count,
  FeedAvatar,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../mds/styled/feed'
import FeedBody from '../Feed/FeedBody'
import LikeComponent from '../Feed/LikeComponent'
import MomentDateChange from '../Feed/MomentDateChange'
import CommentForm from '../Form/CommentForm'

interface Props {
  parentCommentId: number
  nextCommentCount: number
}

const NewBottomWrapper = styled(BottomWrapper)`
  padding-left: 70px;
`

const NewMiddleWrapper = styled(MiddleWrapper)`
  padding-left: 70px;
`

const NewTopWrapper = styled(TopWrapper)`
  padding: 13px 0 0 0;
`

const FeedWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? 'block' : 'none')};
`
const ExtendWrapper = styled.div`
  padding-top: 7px;
  display: flex;
  align-items: center;

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

const CommentFormWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? 'block' : 'none')};
  margin-top: 20px;
`

export default function SubCommentComponent({
  parentCommentId,
  nextCommentCount,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cursor, setCursor] = useState<string | undefined>(undefined)
  const { comments, isEnded, isLoaded } = useSubCommentsById(
    parentCommentId,
    isOpen,
    cursor
  )

  const history = useHistory()
  console.log(isLoaded)

  return (
    <>
      <ExtendWrapper>
        <CommentArrow />
        <ExtendButton
          onClick={() => {
            if (isOpen === false) {
              setIsOpen(true)
            } else if (isEnded) {
              setIsOpen(false)
            } else {
              if (comments) setCursor(comments[0].id.toString())
            }
          }}
        >
          {!isOpen && isLoaded ? (
            `답글 ${nextCommentCount}개 보기`
          ) : (
            <>
              {isEnded
                ? '답글 숨기기'
                : `이전 답글 ${nextCommentCount - comments.length}개 보기`}
            </>
          )}
        </ExtendButton>
      </ExtendWrapper>
      {comments.map((comment) => (
        <FeedWrapper key={`${comment.id}-feed-sub-comment`} isOpen={isOpen}>
          <NewTopWrapper>
            <LeftItem>
              <FeedAvatar
                onClick={() =>
                  history.push(`user/${comment.author.id}/profile`)
                }
              />
              <NickNameWrapper>{comment.author.nickname}</NickNameWrapper>
              <PostTime>
                <MomentDateChange time={comment.createdAt} />
              </PostTime>
            </LeftItem>
          </NewTopWrapper>
          <NewMiddleWrapper>
            <FeedBody body={comment.body} isDetail={true} />
          </NewMiddleWrapper>
          <NewBottomWrapper>
            <BottomItem>
              <LikeComponent
                count={comment.commentCount.likeCount}
                isLiked={comment.isLikedSelf}
                commentId={comment.id}
              />
            </BottomItem>
            <BottomItem onClick={() => {}}>
              <TalkIcon cursor={'pointer'} />
              <Count>답글 달기</Count>
            </BottomItem>
          </NewBottomWrapper>
        </FeedWrapper>
      ))}

      {isLoaded && (
        <CommentFormWrapper isOpen={isOpen}>
          <CommentForm />
        </CommentFormWrapper>
      )}
    </>
  )
}
