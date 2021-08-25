import { useState } from 'react'

export default function useUploadFileValidation() {
  const [uploadFileError, setUploadFileError] = useState<string>()
  const [isUploadFileValid, setIsUploadFileValid] = useState(false)
  const validateUloadFile = (file?: File) => {
    setIsUploadFileValid(false)
    setUploadFileError(undefined)
    if (!file) {
      setUploadFileError('파일 업로드 오류')
      setIsUploadFileValid(false)
      return false
    }
    if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
      setUploadFileError('jpg, jpeg, png 파일을 선택해주세요')
      setIsUploadFileValid(false)
      return false
    }
    setIsUploadFileValid(true)
    return true
  }

  return { validateUloadFile, uploadFileError, isUploadFileValid }
}
