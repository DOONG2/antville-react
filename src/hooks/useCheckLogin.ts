import { useRootState } from './useRootState'

const useCheckLogin = () => {
  const { user } = useRootState((state) => state)
  if (user) return true
  else return false
}

export default useCheckLogin
