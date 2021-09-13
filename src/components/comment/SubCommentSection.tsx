import styled from '@emotion/styled'
import React, { RefObject } from 'react'
import { useHistory } from 'react-router'
import { Comment } from '../../lib/api/comment/types'
import TalkIcon from '../../static/svg/TalkIcon'
import {
  BottomItem,
  BottomWrapper,
  Count,
  FeedAvatar,
  FeedTop,
  FeedWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  RightItem,
  TopWrapper,
} from '../../lib/styles/feed'
import FeedBody from '../feed/FeedBody'
import LikeComponent from '../feed/LikeComponent'
import MomentDateChange from '../common/MomentDateChange'
import { AvatarImage } from '../../lib/styles/post'
import UserIcon50 from '../../static/svg/UserIcon50'
import ImageComponent from '../feed/ImageComponent'
import { sub_comment_query_key } from '../../lib/variable'
import ReactQuill from 'react-quill'
import useGetTagHtml from '../post/hooks/useGetTagHtml'

type Props = {
  subComments?: Comment[]
  isOpen: boolean
  inputRef: RefObject<ReactQuill>
  setBody: (value: string) => void
  body: string
}

export default function SubCommentSection({
  subComments,
  isOpen,
  inputRef,
  setBody,
  body,
}: Props) {
  const history = useHistory()
  const { getMentionTagHtml } = useGetTagHtml()

  if (!subComments) return <></>

  return (
    <>
      {subComments.map((comment) => (
        <NewFeedWrapper key={`${comment.id}-feed-sub-comment`} isOpen={isOpen}>
          <LeftItem>
            <FeedAvatar
              onClick={() =>
                history.push(`/user/${comment.author.nickname}/profile`)
              }
            >
              {comment.author.profileImg ? (
                <AvatarImage
                  src={comment.author.profileImg}
                  alt="profile_image"
                />
              ) : (
                <UserIcon50 />
              )}
            </FeedAvatar>
          </LeftItem>
          <RightItem>
            <TopWrapper>
              <FeedTop>
                <NickNameWrapper
                  onClick={() =>
                    history.push(`/user/${comment.author.nickname}/profile`)
                  }
                >
                  {comment.author.nickname}
                </NickNameWrapper>
                <PostTime>
                  <MomentDateChange time={comment.createdAt} />
                </PostTime>
              </FeedTop>
            </TopWrapper>
            <MiddleWrapper>
              <FeedBody body={comment.body} isDetail={true} />
              {comment.commentImgs[0] && (
                <ImageComponent url={comment.commentImgs[0].image.toString()} />
              )}
              {comment.gifImage?.gifUrl && (
                <ImageComponent url={comment.gifImage.gifUrl} isGif={true} />
              )}
            </MiddleWrapper>
            <BottomWrapper>
              <BottomItem>
                <LikeComponent
                  count={comment.commentCount.likeCount}
                  isLiked={comment.isLikedSelf}
                  id={comment.id}
                  queryKey={sub_comment_query_key}
                  parentId={String(comment.parentCommentId)}
                />
              </BottomItem>
              <BottomItem
                onClick={() => {
                  setTimeout(() => inputRef.current?.focus(), 1)
                  if (!inputRef.current?.editor) return
                  if (body === '' || body === '<p><br></p>') {
                    setBody(getMentionTagHtml(comment.author.nickname))
                    setTimeout(
                      () =>
                        inputRef.current!.setEditorSelection(
                          inputRef.current!.editor!,
                          {
                            index: 2,
                            length: 0,
                          }
                        ),
                      1
                    )
                  }
                }}
              >
                <TalkIcon cursor={'pointer'} />
                <Count>답글 달기</Count>
              </BottomItem>
            </BottomWrapper>
          </RightItem>
        </NewFeedWrapper>
      ))}
    </>
  )
}

const NewFeedWrapper = styled(FeedWrapper)<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
`
