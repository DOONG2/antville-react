import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import StockDownIcon from '../../assets/svg/StockDownIcon'
import StockUpIcon from '../../assets/svg/StockUpIcon'
import TalkIcon from '../../assets/svg/TalkIcon'
import usePostStockQuery from '../../hooks/query/usePostStockQuery'
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll'
import { useRootState } from '../../hooks/useRootState'
import {
  BottomItem,
  BottomWrapper,
  Count,
  FeedAvatar,
  FeedWrapper,
  GifImage,
  IconWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../mds/styled/feed'
import { Image } from '../../mds/styled/post'
import FeedBody from './FeedBody'
import FeedOption from './FeedOption'
import LikeComponent from './LikeComponent'
import MomentDateChange from './MomentDateChange'

interface Props {
  id: string
}

export const Bottom = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  height: 10px;

  display: ${(p) => (p.isScrolled ? 'none' : 'block')};
`

const FeedSection = ({ id }: Props) => {
  const {
    feed: { posts },
  } = useRootState((state) => state)

  const history = useHistory()
  const bottomRef = useRef<HTMLDivElement>(null)

  const isBottomVisible = useIntersectionObserver(
    bottomRef,
    {
      threshold: 0,
    },
    false
  )

  const { fetchNextPage, hasNextPage } = usePostStockQuery({ id })

  useEffect(() => {
    isBottomVisible && hasNextPage && fetchNextPage()
  }, [isBottomVisible])

  return (
    <>
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
                {post.sentiment === 'UP' && <StockUpIcon />}
                {post.sentiment === 'DOWN' && <StockDownIcon />}
              </IconWrapper>
            </LeftItem>
            <FeedOption />
          </TopWrapper>
          <MiddleWrapper>
            <FeedBody body={post.body} />
            {post.postImgs[0] && (
              <Image
                src={post.postImgs[0].image.toString()}
                alt={`${post.id}-feed-image`}
              />
            )}
            {post.gifImage?.gifUrl && (
              <GifImage
                src={post.gifImage.gifUrl}
                alt={`${post.id}-gif-image`}
              />
            )}
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

      <Bottom ref={bottomRef} isScrolled={!hasNextPage || posts === null} />
    </>
  )
}

export default FeedSection
