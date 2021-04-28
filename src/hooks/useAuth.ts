import { useDispatch } from 'react-redux'
import { User } from '../api/types'
import userStorage from '../lib/userStorage'
import userSlice from '../reducers/Slices/user'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const dispatch = useDispatch()
  const authorize = (user: User) => {
    dispatch(setUserState(user))
    userStorage.set(user)
  }
  const logout = () => {
    setUserState(null)
    userStorage.clear()
  }

  return {
    authorize,
    logout,
  }
}
