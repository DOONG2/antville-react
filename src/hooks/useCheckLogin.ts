import userStorage from '../lib/userStorage'

const useCheckLogin = () => {
  const storedUser = userStorage.get()
  if (storedUser) return true
  else return false
}

export default useCheckLogin
