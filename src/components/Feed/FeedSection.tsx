import React, { ReactNode } from 'react'
import { useHistory } from 'react-router'
import { Post } from '../../lib/api/types'
import StockDownIcon from '../../static/svg/StockDownIcon'
import StockUpIcon from '../../static/svg/StockUpIcon'
import TalkIcon from '../../static/svg/TalkIcon'
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
} from '../../lib/styles/feed'
import { Image } from '../../lib/styles/post'
import FeedBody from './FeedBody'
import FeedOption from './FeedOption'
import LikeComponent from './LikeComponent'
import MomentDateChange from '../common/MomentDateChange'

interface Props {
  posts: Post[]
  loading?: boolean
  emptyComponent: ReactNode
}

const FeedSection = ({ posts, loading, emptyComponent }: Props) => {
  const history = useHistory()

  if (posts.length < 1) return <>{emptyComponent}</>

  return (
    <>
      {posts?.map((post) => (
        <FeedWrapper key={`${post.id}-feed-section`}>
          <TopWrapper>
            <LeftItem>
              <FeedAvatar
                onClick={() =>
                  history.push(`/user/${post.author.nickname}/profile`)
                }
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
    </>
  )
}

export default FeedSection
