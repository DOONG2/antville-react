import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import postLikePost from '../../api/post/postLikePost'
import postUnLikePost from '../../api/post/postUnLikePost'
import HeartIcon from '../../assets/svg/HeartIcon'
import useCheckLogin from '../../hooks/useCheckLogin'
import viewSlice from '../../reducers/Slices/view'

interface Props {
  isLiked: boolean
  count: number
  postId: number
}

const Count = styled.div`
  user-select: none;
`

export default function LikeComponent({ isLiked, count, postId }: Props) {
  const { setIsOpenLoginForm } = viewSlice.actions
  const [liked, setLiked] = useState<boolean>(isLiked)
  const [likeCount, setLikeCount] = useState<number>(count)
  const isLoggedIn = useCheckLogin()
  const dispatch = useDispatch()

  useEffect(() => {
    setLiked(isLiked)
    setLikeCount(count)
  }, [isLiked, count])

  return (
    <>
      <HeartIcon
        cursor={'pointer'}
        color={liked ? '#FA1D65' : ''}
        stroke={liked ? '' : '#9E9E9E'}
        onClick={() => {
          if (!isLoggedIn) return dispatch(setIsOpenLoginForm(true))
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
