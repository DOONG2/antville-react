import { useDispatch } from 'react-redux'
import { User } from '../api/types'
import authStorage from '../lib/authStorage'
import userStorage from '../lib/userStorage'
import authSlice from '../reducers/Slices/auth'
import userSlice from '../reducers/Slices/user'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const { setAuthState } = authSlice.actions
  const dispatch = useDispatch()
  const authorize = (user: User) => {
    dispatch(setUserState(user))
    dispatch(setAuthState(authStorage.get()))
    userStorage.set(user)
  }
  const logout = () => {
    dispatch(setUserState(null))
    userStorage.clear()
    authStorage.clear()
  }

  return {
    authorize,
    logout,
  }
}
