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
import optimizeImage from '../../../lib/utils/optimizeImage'
import { AvatarImage } from '../../../lib/styles/post'
import { grey020 } from '../../../lib/styles/colors'

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
      <NewFeedTitle>
        <TitleIconWrapper
          onClick={() => {
            history.goBack()
          }}
        >
          <LeftArrow />
        </TitleIconWrapper>
        <FeedText>게시글</FeedText>
      </NewFeedTitle>
      {post && (
        <NewFeedWrapper key={`${post.id}-feed-detail`}>
          <NewTopWrapper>
            <NewLeftItem>
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
              <NewNicknameWrapper
                onClick={() =>
                  history.push(`/user/${post.author.nickname}/profile`)
                }
              >
                {post.author.nickname}
              </NewNicknameWrapper>
              <NewPostTime>
                <MomentDateChange time={post.createdAt} />
              </NewPostTime>
              <IconWrapper>
                {post.sentiment === 'UP' && <StockUpIcon />}
                {post.sentiment === 'DOWN' && <StockDownIcon />}
              </IconWrapper>
            </NewLeftItem>
            <FeedOption />
          </NewTopWrapper>
          <NewMiddleWrapper>
            <FeedBody body={post.body} isDetail={true} />
            {post.postImgs[0] && (
              <ImageComponent url={post.postImgs[0].image.toString()} />
            )}
            {post.gifImage?.gifUrl && (
              <ImageComponent url={post.gifImage.gifUrl} isGif={true} />
            )}
            <NewButtonWrapper>
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
            </NewButtonWrapper>
          </NewMiddleWrapper>
          {post.postStockPrice && (
            <SubWrapper>
              <FeedHistoryComponent
                postStock={new PostStock(post.postStockPrice)}
              />
            </SubWrapper>
          )}
        </NewFeedWrapper>
      )}
    </Wrapper>
  )
}

const NewNicknameWrapper = styled(NickNameWrapper)`
  margin-left: 19px;
`

const NewFeedTitle = styled(FeedTitle)`
  padding-bottom: 17px;
  border-bottom: 1px solid ${grey020};
`

const NewTopWrapper = styled(TopWrapper)`
  padding: 0 6px;
`

const NewPostTime = styled(PostTime)`
  margin-top: 3px;
`

const NewFeedWrapper = styled(FeedWrapper)`
  margin: 0;
  padding: 0;
  padding-top: 17px;
`

const Wrapper = styled.div`
  margin-bottom: 12px;
  padding: 28px 24px 32px 24px;
`

const NewMiddleWrapper = styled(MiddleWrapper)`
  padding: 0 16px;
  margin-top: 15px;
`

const SubWrapper = styled.div`
  margin-top: 39px;
`

const NewLeftItem = styled(LeftItem)`
  align-items: center;
`

const NewButtonWrapper = styled(BottomWrapper)`
  margin: 0;
  padding-top: 25px;
`
