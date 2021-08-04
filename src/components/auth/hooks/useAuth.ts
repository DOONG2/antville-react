import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCurrentUser } from '../../../lib/api/auth/getCurrentUser'
import postLogin from '../../../lib/api/auth/postLogin'
import { postLoginRequest } from '../../../lib/api/auth/types'
import authStorage from '../../../lib/authStorage'
import userStorage from '../../../lib/userStorage'
import authSlice from '../../../reducers/Slices/auth'
import userSlice from '../../../reducers/Slices/user'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const { setAuthState } = authSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()

  const getUser = async () => {
    try {
      const user = await getCurrentUser()
      dispatch(setUserState(user))
    } catch (_) {
      logout()
    }
  }

  const login = async (input: postLoginRequest) => {
    const { accessToken, refreshToken } = await postLogin({
      email: input.email,
      password: input.password,
    })

    dispatch(setAuthState({ accessToken, refreshToken }))
    await getUser()
  }

  const logout = () => {
    dispatch(setUserState(null))
    dispatch(setAuthState(null))
    userStorage.clear()
    authStorage.clear()
    history.push('/')
  }

  return { getUser, login, logout }
}
