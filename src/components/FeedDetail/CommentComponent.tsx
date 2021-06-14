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
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../mds/styled/feed'
import FeedBody from '../Feed/FeedBody'
import { Bottom } from '../Feed/FeedSection'
import LikeComponent from '../Feed/LikeComponent'
import MomentDateChange from '../Feed/MomentDateChange'

const NewFeedWrapper = styled.div`
  border: none;
`

export default function CommentComponent() {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const [isScrolled, setScrolled] = useState<boolean>(false)

  const { comments } = useRootState((state) => state.feed)
  console.log(comments)

  const bottomRef = useRef<HTMLDivElement>(null)

  const isBottomVisible = useIntersectionObserver(
    bottomRef,
    {
      threshold: 0,
    },
    false
  )

  useCommentFeed(Number(id), '15', isBottomVisible, isScrolled, setScrolled)

  return (
    <>
      {comments?.map((comment) => (
        <NewFeedWrapper key={`${comment.id}-feed-comment`}>
          <TopWrapper>
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
          </TopWrapper>
          <MiddleWrapper>
            <FeedBody body={comment.body} isDetail={true} />
          </MiddleWrapper>
          <BottomWrapper>
            <BottomItem>
              <LikeComponent
                count={comment.commentCount.likeCount}
                isLiked={comment.isLikedSelf}
                commentId={comment.id}
              />
            </BottomItem>
            <BottomItem onClick={() => {}}>
              <TalkIcon cursor={'pointer'} />
              <Count>댓글 {comment.commentCount.nextCommentCount}</Count>
            </BottomItem>
          </BottomWrapper>
        </NewFeedWrapper>
      ))}
      <Bottom ref={bottomRef} isScrolled={isScrolled || comments === null} />
    </>
  )
}
