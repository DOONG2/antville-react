import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import TalkIcon from '../../assets/svg/TalkIcon'
import useCommentFeed from '../../hooks/useCommentFeed'
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll'
import { useRootState } from '../../hooks/useRootState'
import {
  BottomItem,
  BottomWrapper,
  Count,
  FeedAvatar,
  FeedWrapper,
  LeftItem,
  GifImage,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../mds/styled/feed'
import { Image } from '../../mds/styled/post'
import FeedBody from '../Feed/FeedBody'
import { Bottom } from '../Feed/FeedSection'
import MomentDateChange from '../Feed/MomentDateChange'
import SubCommentComponent from './SubCommentComponent'

const NewFeedWrapper = styled(FeedWrapper)`
  border: none;
`

export default function CommentComponent() {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const [isScrolled, setScrolled] = useState<boolean>(false)

  const { comments } = useRootState((state) => state.feed)

  const bottomRef = useRef<HTMLDivElement>(null)

  const isBottomVisible = useIntersectionObserver(
    bottomRef,
    {
      threshold: 0,
    },
    false
  )

  useCommentFeed(Number(id), isBottomVisible, isScrolled, setScrolled)

  return (
    <>
      {comments?.map((comment) => (
        <NewFeedWrapper key={`${comment.id}-feed-comment`}>
          <TopWrapper>
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
          </TopWrapper>
          <MiddleWrapper>
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
          </MiddleWrapper>
          <SubCommentComponent comment={comment} />
        </NewFeedWrapper>
      ))}
      <Bottom ref={bottomRef} isScrolled={isScrolled || comments === null} />
    </>
  )
}
