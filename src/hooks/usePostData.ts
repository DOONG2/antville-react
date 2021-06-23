import { useState } from 'react'
import { useDispatch } from 'react-redux'
import postFormData from '../api/post/postFormData'
import { gifDto } from '../api/post/types'
import { Post } from '../api/types'
import postSlice from '../reducers/Slices/post'
import viewSlice from '../reducers/Slices/view'
import { useRootState } from './useRootState'

interface Props {
  body: string
  sentiment?: string
  gifDto?: gifDto
  uploadImage?: File
}

export default function usePostData() {
  const [post, setPost] = useState<Post | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { setIntialize, setIsSubmitted } = postSlice.actions
  const { setIsFocusPostInput } = viewSlice.actions
  const { isSubmitted } = useRootState((state) => state.post)
  const dispatch = useDispatch()

  const postDataApi = async ({
    body,
    sentiment,
    gifDto,
    uploadImage,
  }: Props) => {
    try {
      const formData = new FormData()
      formData.append('body', body)
      if (gifDto) formData.append('gif', JSON.stringify(gifDto))
      if (sentiment) formData.append('sentiment', sentiment)
      if (uploadImage) formData.append('posts', uploadImage)
      const result = await postFormData(formData)
      setPost(result)
      setIsLoaded(true)
      dispatch(setIsFocusPostInput(false))
      dispatch(setIntialize())
      dispatch(setIsSubmitted(!isSubmitted))
    } catch (error) {
      console.log(error)
    }
  }

  return { post, isLoaded, postDataApi }
}
