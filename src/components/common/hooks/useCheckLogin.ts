import userStorage from '../../../lib/userStorage'
import { useRootState } from './useRootState'

const useCheckLogin = () => {
  const { user } = useRootState((state) => state)
  const storedUser = userStorage.get()
  if (user || storedUser) return true
  else return false
}

export default useCheckLogin
