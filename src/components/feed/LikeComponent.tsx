import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import deleteUnLikeComment from '../../lib/api/comment/deleteUnLikeComment'
import putLikeComment from '../../lib/api/comment/putLikeComment'
import deleteUnLikePost from '../../lib/api/post/deleteUnLikePost'
import HeartIcon from '../../static/svg/HeartIcon'
import useCheckLogin from '../common/hooks/useCheckLogin'
import viewSlice from '../../reducers/Slices/view'
import putLikePost from '../../lib/api/post/putLikePost'
// import useMutationLike from './hooks/useMutationLike'

interface Props {
  isLiked: boolean
  count: number
  postId?: number
  commentId?: number
}

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

  // const mustation = useMutationLike()

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
      <Count
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
      >
        좋아요 {likeCount}
      </Count>
    </>
  )
}

const Count = styled.div`
  cursor: pointer;
`
