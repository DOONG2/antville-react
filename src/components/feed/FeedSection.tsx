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
  IconWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../lib/styles/feed'
import { AvatarImage } from '../../lib/styles/post'
import FeedBody from './FeedBody'
import FeedOption from './FeedOption'
import LikeComponent from './LikeComponent'
import MomentDateChange from '../common/MomentDateChange'
import UserIcon50 from '../../static/svg/UserIcon50'
import ImageComponent from './ImageComponent'
import { post_query_key } from '../../lib/variable'

interface Props {
  posts: Post[]
  loading?: boolean
  emptyComponent: ReactNode
  sectionKey: string
}

const FeedSection = ({ posts, loading, emptyComponent, sectionKey }: Props) => {
  const history = useHistory()

  if (posts.length < 1) return <>{emptyComponent}</>

  return (
    <>
      {posts?.map((post) => (
        <FeedWrapper key={`${post.id}-feed-section-${sectionKey}`}>
          <TopWrapper>
            <LeftItem>
              <FeedAvatar
                onClick={() =>
                  history.push(`/user/${post.author.nickname}/profile`)
                }
              >
                {post.author.profileImg ? (
                  <AvatarImage
                    src={post.author.profileImg}
                    alt="profile_image"
                  />
                ) : (
                  <UserIcon50 />
                )}
              </FeedAvatar>
              <NickNameWrapper
                onClick={() =>
                  history.push(`/user/${post.author.nickname}/profile`)
                }
              >
                {post.author.nickname}
              </NickNameWrapper>
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
              <ImageComponent url={post.postImgs[0].image.toString()} />
            )}
            {post.gifImage?.gifUrl && (
              <ImageComponent url={post.gifImage.gifUrl} isGif={true} />
            )}
          </MiddleWrapper>
          <BottomWrapper>
            <BottomItem>
              <LikeComponent
                count={post.postCount.likeCount}
                isLiked={post.isLikedSelf}
                id={post.id}
                queryKey={post_query_key}
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
