import { gifDto } from '../../../lib/api/post/types'

interface Props {
  body: string
  postId: string
  gifDto?: gifDto
  uploadImage?: File
  parentCommentId?: number
}

export default function useCommentForm() {
  const getFormData = ({
    body,
    postId,
    gifDto,
    uploadImage,
    parentCommentId,
  }: Props) => {
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
    if (parentCommentId)
      formData.append('parentCommentId', String(parentCommentId))
    return formData
  }

  return { getFormData }
}
