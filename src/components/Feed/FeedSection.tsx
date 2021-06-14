import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import StockDownIcon from '../../assets/svg/StockDownIcon'
import StockUpIcon from '../../assets/svg/StockUpIcon'
import TalkIcon from '../../assets/svg/TalkIcon'
import useCheckLogin from '../../hooks/useCheckLogin'
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll'
import usePostFeed from '../../hooks/usePostFeed'
import { useRootState } from '../../hooks/useRootState'
import {
  BottomItem,
  BottomWrapper,
  Count,
  FeedAvatar,
  FeedWrapper,
  IconWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../mds/styled/feed'
import FeedBody from './FeedBody'
import FeedOption from './FeedOption'
import FeedTab from './FeedTab'
import FollowingEmpty from './FollowingEmpty'
import LikeComponent from './LikeComponent'
import MomentDateChange from './MomentDateChange'
import WatchListEmpty from './WatchListEmpty'

export const Bottom = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  height: 300px;

  display: ${(p) => (p.isScrolled ? 'none' : 'block')};
`

const FeedSection = () => {
  const {
    feed: { activatedTab, posts },
  } = useRootState((state) => state)

  const [isScrolled, setScrolled] = useState<boolean>(false)
  const isLoggedIn = useCheckLogin()

  const history = useHistory()
  const bottomRef = useRef<HTMLDivElement>(null)

  const isBottomVisible = useIntersectionObserver(
    bottomRef,
    {
      threshold: 0,
    },
    false
  )

  usePostFeed('15', isBottomVisible, isScrolled, setScrolled)

  useEffect(() => {
    setScrolled(false)
  }, [activatedTab])

  return (
    <>
      {isLoggedIn && <FeedTab />}

      {posts && posts.length < 1 && activatedTab === 'watchList' && (
        <WatchListEmpty />
      )}
      {posts && posts.length < 1 && activatedTab === 'following' && (
        <FollowingEmpty />
      )}
      {posts?.map((post) => (
        <FeedWrapper key={`${post.id}-feed-section`}>
          <TopWrapper>
            <LeftItem>
              <FeedAvatar
                onClick={() => history.push(`user/${post.author.id}/profile`)}
              />
              <NickNameWrapper>{post.author.nickname}</NickNameWrapper>
              <PostTime>
                <MomentDateChange time={post.createdAt} />
              </PostTime>
              <IconWrapper>
                {post.sentiment === 'UP' ? <StockUpIcon /> : <StockDownIcon />}
              </IconWrapper>
            </LeftItem>
            <FeedOption />
          </TopWrapper>
          <MiddleWrapper>
            <FeedBody body={post.body} />
          </MiddleWrapper>
          <BottomWrapper>
            <BottomItem>
              <LikeComponent
                count={post.postCount.likeCount}
                isLiked={post.isLikedSelf}
                postId={post.id}
              />
            </BottomItem>
            <BottomItem
              onClick={() => {
                history.push(`/feed/detail/${post.id}`)
              }}
            >
              <TalkIcon cursor={'pointer'} />
              <Count>댓글 {post.postCount.commentCount}</Count>
            </BottomItem>
          </BottomWrapper>
        </FeedWrapper>
      ))}

      <Bottom ref={bottomRef} isScrolled={isScrolled || posts === null} />
    </>
  )
}

export default FeedSection
