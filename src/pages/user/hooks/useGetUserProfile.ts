import { useEffect, useState } from 'react'
import { User } from '../../../lib/api/types'
import getUserProfile from '../../../lib/api/user/getUserProfile'

export default function useGetUserProfile(nickname: string) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const getUserApi = async () => {
      const result = await getUserProfile(nickname)
      setUser(result)
    }
    getUserApi()
  }, [nickname])

  return { user }
}
