import { useEffect } from 'react'
import { getCurrentUser } from '../api/auth/getCurrentUser'
import userStorage from '../lib/userStorage'
import useAuth from './useAuth'

export default function useCheckUserEffect() {
  const { logout } = useAuth()
  useEffect(() => {
    const storedUser = userStorage.get()
    if (!storedUser) return
    getCurrentUser().catch(() => {
      logout()
    })
  }, [logout])
}
