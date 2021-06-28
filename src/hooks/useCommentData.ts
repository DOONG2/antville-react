import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCommentsByIdResponse } from '../api/comment/types'
import postFormData from '../api/comment/postFormData'
import { gifDto } from '../api/post/types'
import commentSlice from '../reducers/Slices/comment'
import { useRootState } from './useRootState'

interface Props {
  body: string
  postId: string
  gifDto?: gifDto
  uploadImage?: File
  parentCommentId?: string
}

export default function useCommentData() {
  const [comments, setComments] = useState<getCommentsByIdResponse | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { setIntialize, setIsSubmitted } = commentSlice.actions
  const { isSubmitted } = useRootState((state) => state.cooment)
  const dispatch = useDispatch()

  const postDataApi = async ({
    body,
    postId,
    gifDto,
    uploadImage,
    parentCommentId,
  }: Props) => {
    try {
      const formData = new FormData()
      formData.append('body', body)
      formData.append('postId', postId)
      if (gifDto) formData.append('gif', JSON.stringify(gifDto))
      if (uploadImage) formData.append('comments', uploadImage)
      if (parentCommentId) formData.append('parentCommentId', parentCommentId)
      const result = await postFormData(formData)
      setComments(result)
      setIsLoaded(true)
      dispatch(setIntialize())
      dispatch(setIsSubmitted(!isSubmitted))
    } catch (error) {
      console.log(error)
    }
  }

  return { comments, isLoaded, postDataApi }
}
