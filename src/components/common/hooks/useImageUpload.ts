import { ChangeEvent, RefObject, useState } from 'react'
import postUserAvatar from '../../../lib/api/user/postUserAvatar'

type Props = {
  hiddenFileInput: RefObject<HTMLInputElement>
  url?: string
}

export default function useImageUpload({ hiddenFileInput, url }: Props) {
  const [uploadImageUrl, setUploadImageUrl] = useState(url)
  const handleClick = () => {
    if (!hiddenFileInput.current) return
    hiddenFileInput.current.value = ''
    hiddenFileInput.current.click()
  }
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0]
    if (fileUploaded === undefined) return

    try {
      const formData = new FormData()
      if (fileUploaded) formData.append('profiles', fileUploaded)
      const result = await postUserAvatar(formData)
      setUploadImageUrl(result.profileImg)
    } catch (error) {
      console.log(error)
    }
  }

  return { uploadImageUrl, setUploadImageUrl, handleClick, handleChange }
}
