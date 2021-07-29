import styled from '@emotion/styled'
import React from 'react'
import { useHistory } from 'react-router'
import LeftArrow from '../../../static/svg/LeftArrow'
import StockDownIcon from '../../../static/svg/StockDownIcon'
import StockUpIcon from '../../../static/svg/StockUpIcon'
import TalkIcon from '../../../static/svg/TalkIcon'
import { Post } from '../../../lib/api/types'
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
} from '../../../lib/styles/feed'
import { Image } from '../../../lib/styles/post'
import FeedBody from '../FeedBody'
import FeedOption from '../FeedOption'
import LikeComponent from '../LikeComponent'
import MomentDateChange from '../../common/MomentDateChange'
import FeedHistoryComponent from './FeedHistoryComponent'
import UserIcon50 from '../../../static/svg/UserIcon50'

type FeedDetailInfoProps = {
  post: Post
}

export default function FeedDetailInfo({ post }: FeedDetailInfoProps) {
  const history = useHistory()

  console.log(post)

  return (
    <Wrapper>
      <Title>
        <TitleIconWrapper
          onClick={() => {
            history.goBack()
          }}
        >
          <LeftArrow />
        </TitleIconWrapper>
        <Text>게시글</Text>
      </Title>
      {post && (
        <FeedWrapper key={`${post.id}-feed-detail`}>
          <TopWrapper>
            <LeftItem>
              <FeedAvatar
                onClick={() =>
                  history.push(`/user/${post.author.nickname}/profile`)
                }
              >
                {post.author.profileImg ? (
                  <img src={post.author.profileImg} alt="profile_image" />
                ) : (
                  <UserIcon50 />
                )}
              </FeedAvatar>
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
          <NewMiddleWrapper>
            <FeedBody body={post.body} isDetail={true} />
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
          </NewMiddleWrapper>
          <SubWrapper>
            <FeedHistoryComponent />
          </SubWrapper>
          <NewBottomWrapper>
            <BottomItem>
              <LikeComponent
                count={post.postCount.likeCount}
                isLiked={post.isLikedSelf}
                postId={post.id}
              />
            </BottomItem>
            <BottomItem>
              <TalkIcon cursor={'pointer'} />
              <Count>댓글 {post.postCount.commentCount}</Count>
            </BottomItem>
            <BottomItem>2021/04/05 08:46AM</BottomItem>
          </NewBottomWrapper>
        </FeedWrapper>
      )}
      <HorizontalLine />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

const TitleIconWrapper = styled.div`
  cursor: pointer;
  padding: 0 5px;
`

const Text = styled.div`
  text-align: center;
  margin-left: 23px;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;

  color: #000000;
`

const NewMiddleWrapper = styled(MiddleWrapper)`
  padding: 0 22px;
`

const SubWrapper = styled.div`
  padding: 22px 0;
`

const NewBottomWrapper = styled(BottomWrapper)`
  margin: 0;
  padding: 0 22px;
`
const HorizontalLine = styled.div`
  margin-top: 9px;
  height: 7px;
  width: 100%;
  margin-bottom: 24px;

  background: #fafafa;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.04);
`
