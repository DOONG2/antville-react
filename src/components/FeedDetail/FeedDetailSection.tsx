import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import StockDownIcon from '../../assets/svg/StockDownIcon'
import StockUpIcon from '../../assets/svg/StockUpIcon'
import TalkIcon from '../../assets/svg/TalkIcon'
import usePostById from '../../hooks/usePostById'
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
import FeedBody from '../Feed/FeedBody'
import FeedOption from '../Feed/FeedOption'
import LikeComponent from '../Feed/LikeComponent'
import MomentDateChange from '../Feed/MomentDateChange'

const Wrapper = styled.div``

export default function FeedDetailSection() {
  const { id } = useParams<{ id: string }>()

  const history = useHistory()

  const post = usePostById(id)
  return (
    <Wrapper>
      {post && (
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
            <BottomItem>
              <TalkIcon
                cursor={'pointer'}
                onClick={() => {
                  history.push(`/feed/detail/${post.id}`)
                }}
              />
              <Count>{post.postCount.commentCount}</Count>
            </BottomItem>
          </BottomWrapper>
        </FeedWrapper>
      )}
    </Wrapper>
  )
}
