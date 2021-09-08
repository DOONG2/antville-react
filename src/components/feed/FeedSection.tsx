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
  FeedTop,
  FeedWrapper,
  IconWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  RightItem,
  TopWrapper,
} from '../../lib/styles/feed'
import { AvatarImage } from '../../lib/styles/post'
import FeedBody from './FeedBody'
import LikeComponent from './LikeComponent'
import MomentDateChange from '../common/MomentDateChange'
import UserIcon50 from '../../static/svg/UserIcon50'
import ImageComponent from './ImageComponent'
import { post_query_key } from '../../lib/variable'
import optimizeImage from '../../lib/utils/optimizeImage'
import styled from '@emotion/styled'

interface Props {
  posts: Post[]
  loading?: boolean
  emptyComponent: ReactNode
  sectionKey: string
  keyId?: string
}

const FeedSection = ({ posts, emptyComponent, sectionKey, keyId }: Props) => {
  const history = useHistory()

  if (posts.length < 1) return <>{emptyComponent}</>

  return (
    <>
      {posts?.map((post) => (
        <NewFeedWrapper key={`${post.id}-feed-section-${sectionKey}`}>
          <LeftItem>
            <FeedAvatar
              onClick={() =>
                history.push(`/user/${post.author.nickname}/profile`)
              }
            >
              {post.author.profileImg ? (
                <AvatarImage
                  src={optimizeImage(post.author.profileImg, 120)}
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
              </FeedTop>
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
                  keyId={keyId}
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
          </RightItem>
        </NewFeedWrapper>
      ))}
    </>
  )
}

const NewFeedWrapper = styled(FeedWrapper)`
  display: flex;
`

export default FeedSection
