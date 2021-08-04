import { useEffect } from 'react'
import userStorage from '../../../lib/userStorage'
import useAuth from '../../auth/hooks/useAuth'

export default function useCheckUserEffect() {
  const { getUser } = useAuth()
  useEffect(() => {
    const storedUser = userStorage.get()
    if (!storedUser) return
    getUser()
  }, [])
}
