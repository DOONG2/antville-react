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
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
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
        <FeedWrapper key={`${comment.id}-feed-sub-comment`} isOpen={isOpen}>
          <NewTopWrapper>
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
            </LeftItem>
          </NewTopWrapper>
          <NewMiddleWrapper>
            <FeedBody body={comment.body} isDetail={true} />
            {comment.commentImgs[0] && (
              <ImageComponent url={comment.commentImgs[0].image.toString()} />
            )}
            {comment.gifImage?.gifUrl && (
              <ImageComponent url={comment.gifImage.gifUrl} isGif={true} />
            )}
          </NewMiddleWrapper>
          <NewBottomWrapper>
            <BottomItem>
              <LikeComponent
                count={comment.commentCount.likeCount}
                isLiked={comment.isLikedSelf}
                id={comment.id}
                queryKey={sub_comment_query_key}
                parentId={comment.parentCommentId}
              />
            </BottomItem>
            <BottomItem
              onClick={() => {
                if (!inputRef.current?.editor) return
                inputRef.current.focus()
                if (body === '' || body === '<p><br></p>') {
                  setBody(getMentionTagHtml(comment.author.nickname))
                  inputRef.current.setEditorSelection(inputRef.current.editor, {
                    index: 2,
                    length: 0,
                  })
                }
              }}
            >
              <TalkIcon cursor={'pointer'} />
              <Count>답글 달기</Count>
            </BottomItem>
          </NewBottomWrapper>
        </FeedWrapper>
      ))}
    </>
  )
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
  margin-left: 97px;
`
