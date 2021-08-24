import styled from '@emotion/styled'
import React, { RefObject, useState } from 'react'
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
  FeedText,
  FeedTitle,
  FeedWrapper,
  IconWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TitleIconWrapper,
  TopWrapper,
} from '../../../lib/styles/feed'
import FeedBody from '../FeedBody'
import FeedOption from '../FeedOption'
import LikeComponent from '../LikeComponent'
import MomentDateChange from '../../common/MomentDateChange'
import FeedHistoryComponent from './FeedHistoryComponent'
import UserIcon50 from '../../../static/svg/UserIcon50'
import PostStock from '../../../lib/models/post_stock'
import ImageComponent from '../ImageComponent'
import { post_query_key } from '../../../lib/variable'

type FeedDetailInfoProps = {
  post: Post
  inputRef?: RefObject<any>
}

export default function FeedDetailInfo({
  post,
  inputRef,
}: FeedDetailInfoProps) {
  const history = useHistory()
  const [isLiked, setIsLiked] = useState(post.isLikedSelf)
  const [count, setCount] = useState(post.postCount.likeCount)

  return (
    <Wrapper>
      <FeedTitle>
        <TitleIconWrapper
          onClick={() => {
            history.goBack()
          }}
        >
          <LeftArrow />
        </TitleIconWrapper>
        <FeedText>게시글</FeedText>
      </FeedTitle>
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
          <NewMiddleWrapper>
            <FeedBody body={post.body} isDetail={true} />
            {post.postImgs[0] && (
              <ImageComponent url={post.postImgs[0].image.toString()} />
            )}
            {post.gifImage?.gifUrl && (
              <ImageComponent url={post.gifImage.gifUrl} isGif={true} />
            )}
          </NewMiddleWrapper>
          <SubWrapper>
            {post.postStockPrice && (
              <SubWrapper>
                <FeedHistoryComponent
                  postStock={new PostStock(post.postStockPrice)}
                />
              </SubWrapper>
            )}
          </SubWrapper>
          <NewBottomWrapper>
            <BottomItem
              onClick={() => {
                if (isLiked) setCount(count - 1)
                else setCount(count + 1)
                setIsLiked(!isLiked)
              }}
            >
              <LikeComponent
                count={count}
                isLiked={isLiked}
                id={post.id}
                queryKey={post_query_key}
              />
            </BottomItem>
            <BottomItem onClick={() => inputRef?.current.focus()}>
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

const NewMiddleWrapper = styled(MiddleWrapper)`
  padding: 0 22px;
  margin-top: 15px;
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
