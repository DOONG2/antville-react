import { gifDto } from '../../../lib/api/post/types'

interface Props {
  body: string
  sentiment?: string
  gifDto?: gifDto
  uploadImage?: File
}

export default function usePostFormData() {
  const getFormData = ({ body, sentiment, gifDto, uploadImage }: Props) => {
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

    return formData
  }

  return { getFormData }
}
