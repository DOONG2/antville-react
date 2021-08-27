import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCurrentUser } from '../../../lib/api/auth/getCurrentUser'
import postLogin from '../../../lib/api/auth/postLogin'
import { postLoginRequest } from '../../../lib/api/auth/types'
import authStorage from '../../../lib/authStorage'
import { gaSetUserInfo } from '../../../lib/utils/ga'
import stockSlice from '../../../reducers/Slices/stock'
import userSlice from '../../../reducers/Slices/user'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const { reset } = stockSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()

  const getUser = async () => {
    try {
      const user = await getCurrentUser()
      dispatch(setUserState(user))
      gaSetUserInfo({ id: user.id, nickname: user.nickname })
    } catch (_) {
      logout()
    }
  }

  const login = async (input: postLoginRequest) => {
    const { accessToken, refreshToken } = await postLogin({
      email: input.email,
      password: input.password,
    })
    authStorage.set({ accessToken, refreshToken })
    await getUser()
  }

  const logout = () => {
    dispatch(setUserState(null))
    dispatch(reset())
    history.push('/')
  }

  return { getUser, login, logout }
}
