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
