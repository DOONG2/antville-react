import styled from '@emotion/styled'
import React, { useRef } from 'react'
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

type Props = {
  subComments?: Comment[]
  isOpen: boolean
}

export default function SubCommentSection({ subComments, isOpen }: Props) {
  const history = useHistory()
  const inputRef = useRef<any>(null)

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
            <BottomItem onClick={() => inputRef.current?.focus()}>
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
