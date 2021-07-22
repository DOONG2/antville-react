import { useEffect } from 'react'
import { getCurrentUser } from '../../../lib/api/auth/getCurrentUser'
import userStorage from '../../../lib/userStorage'
import useAuth from '../../auth/hooks/useAuth'

export default function useCheckUserEffect() {
  const { logout, authorize } = useAuth()
  useEffect(() => {
    const storedUser = userStorage.get()
    if (!storedUser) return
    getCurrentUser()
      .then((res) => {
        authorize(res)
      })
      .catch(() => {
        logout()
      })
  }, [])
}
