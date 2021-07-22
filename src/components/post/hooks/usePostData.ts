import { useState } from 'react'
import { useDispatch } from 'react-redux'
import postFormData from '../../../lib/api/post/postFormData'
import { gifDto } from '../../../lib/api/post/types'
import { Post } from '../../../lib/api/types'
import viewSlice from '../../../reducers/Slices/view'

interface ApiProps {
  body: string
  sentiment?: string
  gifDto?: gifDto
  uploadImage?: File
}

interface Props {
  addPost?: (value?: Post) => void
}

export default function usePostData({ addPost }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { setIsFocusPostInput } = viewSlice.actions
  const dispatch = useDispatch()

  const postDataApi = async ({
    body,
    sentiment,
    gifDto,
    uploadImage,
  }: ApiProps) => {
    try {
      const formData = new FormData()
      formData.append('body', body)
      if (gifDto) formData.append('gif', JSON.stringify(gifDto))
      if (sentiment) formData.append('sentiment', sentiment)
      if (uploadImage) formData.append('posts', uploadImage)
      const result = await postFormData(formData)
      if (addPost) addPost(result)
      setIsLoaded(true)
      dispatch(setIsFocusPostInput(false))
    } catch (error) {
      console.log(error)
    }
  }

  return { isLoaded, postDataApi }
}
