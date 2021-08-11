import { useEffect } from 'react'
import authStorage from '../../../lib/authStorage'
import useAuth from '../../auth/hooks/useAuth'

export default function useCheckUserEffect() {
  const { getUser } = useAuth()

  useEffect(() => {
    const auth = authStorage.get()
    if (auth) getUser()
  }, [])
}
