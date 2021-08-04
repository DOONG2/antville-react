import { RefObject } from 'react'

type Props = {
  hiddenFileInput: RefObject<HTMLInputElement>
}

export default function useUserImageUpload({ hiddenFileInput }: Props) {
  const handleClick = () => {
    if (!hiddenFileInput.current) return
    hiddenFileInput.current.value = ''
    hiddenFileInput.current.click()
  }

  return {
    handleClick,
  }
}
