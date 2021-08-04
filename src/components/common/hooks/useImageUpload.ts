import { ChangeEvent, RefObject, useState } from 'react'

type Props = {
  hiddenFileInput: RefObject<HTMLInputElement>
  url?: string
}

export default function useImageUpload({ hiddenFileInput, url }: Props) {
  const [uploadImageUrl, setUploadImageUrl] = useState(url)
  const [uploadFile, setUploadFile] = useState<File>()
  const handleClick = () => {
    if (!hiddenFileInput.current) return
    hiddenFileInput.current.value = ''
    hiddenFileInput.current.click()
  }
  const handleChange = async (e: ChangeEvent<any>) => {
    const fileUploaded = e.target.files?.[0]
    if (fileUploaded === undefined) return
    setUploadFile(fileUploaded)
  }

  return {
    uploadImageUrl,
    setUploadImageUrl,
    handleClick,
    handleChange,
    uploadFile,
  }
}
