import { useState } from 'react'
import postFormData from '../api/post/postFormData'
import { gifDto } from '../api/post/types'
import { Post } from '../api/types'

export default function usePostData() {
  const [post, setPost] = useState<Post | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const postDataApi = async (
    body: string,
    sentiment?: string,
    gif?: gifDto
  ) => {
    try {
      const formData = new FormData()
      formData.append('body', body)
      if (gif) formData.append('gif', JSON.stringify(gif))
      if (sentiment) formData.append('sentiment', sentiment)
      const result = await postFormData(formData)
      setPost(result)
      setIsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  return { post, isLoaded, postDataApi }
}
