import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import deleteUnLikeComment from '../../api/comment/deleteUnLikeComment'
import putLikeComment from '../../api/comment/putLikeComment'
import putLikePost from '../../api/post/putLikePost'
import deleteUnLikePost from '../../api/post/deleteUnLikePost'
import HeartIcon from '../../assets/svg/HeartIcon'
import useCheckLogin from '../../hooks/useCheckLogin'
import viewSlice from '../../reducers/Slices/view'

interface Props {
  isLiked: boolean
  count: number
  postId?: number
  commentId?: number
}

const Count = styled.div`
  user-select: none;
`

export default function LikeComponent({
  isLiked,
  count,
  postId,
  commentId,
}: Props) {
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
        color={liked && isLoggedIn ? '#FA1D65' : ''}
        stroke={liked && isLoggedIn ? '' : '#9E9E9E'}
        onClick={() => {
          if (!isLoggedIn) return dispatch(setIsOpenLoginForm(true))
          setLiked(!liked)
          if (liked) {
            setLikeCount(likeCount - 1)
            postId && deleteUnLikePost(postId)
            commentId && deleteUnLikeComment(commentId)
          } else {
            setLikeCount(likeCount + 1)
            postId && putLikePost(postId)
            commentId && putLikeComment(commentId)
          }
        }}
      />
      <Count>좋아요 {likeCount}</Count>
    </>
  )
}
