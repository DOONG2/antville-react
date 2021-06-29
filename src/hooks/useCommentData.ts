import { useState } from 'react'
import { CommentObject } from '../api/comment/types'
import postFormData from '../api/comment/postFormData'
import { gifDto } from '../api/post/types'

interface ApiProps {
  body: string
  postId: string
  gifDto?: gifDto
  uploadImage?: File
  parentCommentId?: string
}

interface Props {
  addComment?: (value?: CommentObject) => void
}

export default function useCommentData({ addComment }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const postDataApi = async ({
    body,
    postId,
    gifDto,
    uploadImage,
    parentCommentId,
  }: ApiProps) => {
    try {
      const formData = new FormData()
      formData.append('body', body)
      formData.append('postId', postId)
      if (gifDto) formData.append('gif', JSON.stringify(gifDto))
      if (uploadImage) formData.append('comments', uploadImage)
      if (parentCommentId) formData.append('parentCommentId', parentCommentId)
      const result = await postFormData(formData)
      if (addComment) addComment(result)
      setIsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  return { isLoaded, postDataApi }
}
