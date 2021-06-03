import styled from '@emotion/styled'
import React, { useState } from 'react'
import postLikePost from '../../api/post/postLikePost'
import postUnLikePost from '../../api/post/postUnLikePost'
import HeartIcon from '../../assets/svg/HeartIcon'

interface Props {
  isLiked: boolean
  count: number
  postId: number
}

const Count = styled.div`
  user-select: none;
`

export default function LikeComponent({ isLiked, count, postId }: Props) {
  const [liked, setLiked] = useState<boolean>(isLiked)
  const [likeCount, setLikeCount] = useState<number>(count)
  return (
    <>
      <HeartIcon
        cursor={'pointer'}
        color={liked ? '#FA1D65' : ''}
        stroke={liked ? '' : '#9E9E9E'}
        onClick={() => {
          setLiked(!liked)
          if (liked) {
            setLikeCount(likeCount - 1)
            postUnLikePost(postId)
          } else {
            setLikeCount(likeCount + 1)
            postLikePost(postId)
          }
        }}
      />
      <Count>{likeCount}</Count>
    </>
  )
}
