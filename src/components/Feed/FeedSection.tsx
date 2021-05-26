import styled from '@emotion/styled'
import React, { useRef } from 'react'
import HeartIcon from '../../assets/svg/HeartIcon'
import StockDownIcon from '../../assets/svg/StockDownIcon'
import StockUpIcon from '../../assets/svg/StockUpIcon'
import TalkIcon from '../../assets/svg/TalkIcon'
import ThreeDot from '../../assets/svg/ThreeDot'
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll'
import usePostFeed from '../../hooks/usePostFeed'
import { useRootState } from '../../hooks/useRootState'
import { blue040, grey060, grey080 } from '../../mds/styled/colors'
import FollowingEmpty from './FollowingEmpty'
import MomentDateChage from './MomentDateChage'
import WatchListEmpty from './WatchListEmpty'

const FeedWrapper = styled.div`
  border-bottom: 1px solid #ececec;
`

const TopWrapper = styled.div`
  padding: 13px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FeedAvatar = styled.div`
  width: 50px;
  height: 50px;

  background-color: ${blue040};

  border-radius: 50px;
`

const NickNameWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};

  margin-left: 20px;
  padding-bottom: 5px;
`

const PostTime = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: ${grey060};

  margin-left: 7px;
`

const IconWrapper = styled.div`
  margin-left: 9px;
  display: flex;
  align-items: center;
`

const LeftItem = styled.div`
  display: flex;
  align-items: center;
`

const RightItem = styled.div``

const MiddleWrapper = styled.div`
  padding-left: 97px;
  padding-right: 22px;

  font-size: 16px;
  line-height: 150%;
`
const BottomWrapper = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  padding-left: 97px;
  column-gap: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  color: #757575;
`

const BottomItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding-bottom: 13px;
`

const Count = styled.div``

const Bottom = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  height: 300px;

  display: ${(p) => (p.isScrolled ? 'none' : 'initial')};
`

const FeedSection = () => {
  const { activatedTab, posts, isScrolled } = useRootState(
    (state) => state.feed
  )

  const bottomRef = useRef<HTMLDivElement>(null)

  const isBottomVisible = useIntersectionObserver(
    bottomRef,
    {
      threshold: 0,
    },
    false
  )

  usePostFeed('15', isBottomVisible)

  return (
    <>
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
              <FeedAvatar></FeedAvatar>
              <NickNameWrapper>{post.author.nickname}</NickNameWrapper>
              <PostTime>
                <MomentDateChage time={post.createdAt} />
              </PostTime>
              <IconWrapper>
                {post.sentiment === 'UP' ? <StockUpIcon /> : <StockDownIcon />}
              </IconWrapper>
            </LeftItem>
            <RightItem>
              <ThreeDot />
            </RightItem>
          </TopWrapper>
          <MiddleWrapper>{post.body}</MiddleWrapper>
          <BottomWrapper>
            <BottomItem>
              <HeartIcon />
              <Count>{post.postCount.likeCount}</Count>
            </BottomItem>
            <BottomItem>
              <TalkIcon />
              <Count>{post.postCount.commentCount}</Count>
            </BottomItem>
          </BottomWrapper>
        </FeedWrapper>
      ))}

      <Bottom ref={bottomRef} isScrolled={isScrolled} />
    </>
  )
}

export default FeedSection
