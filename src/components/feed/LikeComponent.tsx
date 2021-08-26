import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import deleteUnLikeComment from '../../lib/api/comment/deleteUnLikeComment'
import putLikeComment from '../../lib/api/comment/putLikeComment'
import deleteUnLikePost from '../../lib/api/post/deleteUnLikePost'
import HeartIcon from '../../static/svg/HeartIcon'
import useCheckLogin from '../common/hooks/useCheckLogin'
import viewSlice from '../../reducers/Slices/view'
import putLikePost from '../../lib/api/post/putLikePost'
import useMutationLike from './hooks/useMutationLike'
import useMutationUnlike from './hooks/useMutationUnlike'
import { post_query_key } from '../../lib/variable'
import { likeEvent } from '../../lib/utils/ga'

interface Props {
  isLiked: boolean
  count: number
  id: number
  parentId?: number
  queryKey: string
  stockId?: number
}

export default function LikeComponent({
  isLiked,
  count,
  id,
  queryKey,
  parentId,
  stockId,
}: Props) {
  const { setIsOpenLoginForm } = viewSlice.actions
  const isLoggedIn = useCheckLogin()
  const dispatch = useDispatch()

  const { mutation: likeMutation } = useMutationLike({
    callback: () => {
      if (queryKey === post_query_key) return putLikePost(id)
      else return putLikeComment(id)
    },
    queryKey,
    stockId,
  })
  const { mutation: unLikeMutation } = useMutationUnlike({
    callback: () => {
      if (queryKey === post_query_key) return deleteUnLikePost(id)
      else return deleteUnLikeComment(id)
    },
    queryKey,
    stockId,
  })

  return (
    <Wrapper
      onClick={() => {
        if (!isLoggedIn) return dispatch(setIsOpenLoginForm(true))
        if (isLiked) unLikeMutation.mutate({ id, parentId })
        else {
          likeMutation.mutate({ id, parentId })
          likeEvent()
        }
      }}
    >
      <HeartIcon
        cursor={'pointer'}
        color={isLiked && isLoggedIn ? '#FA1D65' : ''}
        stroke={isLiked && isLoggedIn ? '' : '#9E9E9E'}
      />
      <Count>좋아요 {count}</Count>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`

const Count = styled.div`
  cursor: pointer;
`
