import { useState } from 'react'
import postFormData from '../../../lib/api/comment/postFormData'
import { gifDto } from '../../../lib/api/post/types'

interface ApiProps {
  body: string
  postId: string
  gifDto?: gifDto
  uploadImage?: File
  parentCommentId?: string
}

export default function useCommentData() {
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
      const parser = new DOMParser()
      const doc = parser.parseFromString(body, 'text/html')
      const elements = doc.querySelectorAll('p')
      let bodyOnlyText = ''
      elements.forEach((el, index) => {
        if (index === elements.length - 1)
          return (bodyOnlyText = bodyOnlyText + el.innerText)
        bodyOnlyText = bodyOnlyText + el.innerText + '\n'
      })
      formData.append('body', bodyOnlyText)
      formData.append('postId', postId)
      if (gifDto) formData.append('gif', JSON.stringify(gifDto))
      if (uploadImage) formData.append('comments', uploadImage)
      if (parentCommentId) formData.append('parentCommentId', parentCommentId)
      await postFormData(formData) // add: result mutation
      setIsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  return { isLoaded, postDataApi }
}
