import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import {
  CommentObject,
  getCommentsByIdResponse,
} from '../../lib/api/comment/types'
import CommentArrow from '../../static/svg/CommentArrow'
import TalkIcon from '../../static/svg/TalkIcon'
import useSubCommentsById from './hooks/useSubCommentsById'
import { grey060 } from '../../lib/styles/colors'
import {
  BottomItem,
  BottomWrapper,
  Count,
  FeedAvatar,
  GifImage,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../lib/styles/feed'
import FeedBody from '../feed/FeedBody'
import LikeComponent from '../feed/LikeComponent'
import MomentDateChange from '../common/MomentDateChange'
import { Image } from '../../lib/styles/post'
import SubCommentForm from './SubCommentForm'

interface Props {
  comment: CommentObject
}

export default function SubCommentSection({ comment }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cursor, setCursor] = useState<string | undefined>(undefined)
  const [isOpenCommentForm, setIsOpenCommentForm] = useState<boolean>(false)
  const {
    comments: _comments,
    isEnded,
    isLoaded,
  } = useSubCommentsById(comment.id, isOpen, cursor)

  const [comments, setComments] = useState<getCommentsByIdResponse>(_comments)

  const addComment = (comment?: CommentObject) => {
    comment && setComments(comments.concat(comment))
  }

  useEffect(() => {
    setComments(_comments)
  }, [isLoaded])

  const history = useHistory()

  return (
    <>
      <BottomWrapper>
        <BottomItem>
          <LikeComponent
            count={comment.commentCount.likeCount}
            isLiked={comment.isLikedSelf}
            commentId={comment.id}
          />
        </BottomItem>
        <BottomItem
          onClick={() => {
            setIsOpenCommentForm(true)
            setIsOpen(true)
          }}
        >
          <TalkIcon cursor={'pointer'} />
          <Count>답글 달기</Count>
        </BottomItem>
      </BottomWrapper>
      <SubCommentWrapper>
        {' '}
        {comment.commentCount.nextCommentCount > 0 && (
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
              {!isOpen ? (
                `답글 ${comment.commentCount.nextCommentCount}개 보기`
              ) : (
                <IsLoadedWrapper isLoaded={isLoaded}>
                  {isEnded
                    ? '답글 숨기기'
                    : `이전 답글 ${
                        comment.commentCount.nextCommentCount - comments.length
                      }개 보기`}
                </IsLoadedWrapper>
              )}
            </ExtendButton>
          </ExtendWrapper>
        )}
        {comments.map((comment) => (
          <FeedWrapper key={`${comment.id}-feed-sub-comment`} isOpen={isOpen}>
            <NewTopWrapper>
              <LeftItem>
                <FeedAvatar
                  onClick={() =>
                    history.push(`/user/${comment.author.nickname}/profile`)
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
              {comment.commentImgs[0] && (
                <Image
                  src={comment.commentImgs[0].image.toString()}
                  alt={`${comment.id}-comment-image`}
                />
              )}
              {comment.gifImage?.gifUrl && (
                <GifImage
                  src={comment.gifImage.gifUrl}
                  alt={`${comment.id}-comment-gif-image`}
                />
              )}
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
            <SubCommentForm
              parentCommentId={comment.id.toString()}
              addComment={addComment}
            />
          </CommentFormWrapper>
        )}
        {comment.commentCount.nextCommentCount < 1 &&
          isOpenCommentForm &&
          !isOpen && (
            <CommentFormWrapper isOpen={isOpenCommentForm}>
              <SubCommentForm
                parentCommentId={comment.id.toString()}
                addComment={addComment}
              />
            </CommentFormWrapper>
          )}
      </SubCommentWrapper>
    </>
  )
}

const SubCommentWrapper = styled.div`
  margin-left: 97px;
`

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

const IsLoadedWrapper = styled.div<{ isLoaded: boolean }>`
  display: ${(p) => (p.isLoaded ? 'block' : 'none')};
`
