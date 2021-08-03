import { useState } from 'react'
import putUserEdit from '../../../lib/api/user/putUserEdit'

interface ApiProps {
  nickname?: string
  bio?: string
}

export default function useUserEditForm() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const editFormApi = async ({ nickname, bio }: ApiProps) => {
    try {
      await putUserEdit(bio, nickname)
      setIsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  return { isLoaded, editFormApi }
}
