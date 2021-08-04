import { postSignUpRequest } from './../../../../lib/api/user/types'
import { useDispatch } from 'react-redux'
import postSignUp from '../../../../lib/api/user/postSignUp'
import viewSlice from '../../../../reducers/Slices/view'
import useAuth from '../../hooks/useAuth'

export default function useSignUp() {
  const { setIsOpenSignUpForm } = viewSlice.actions
  const dispatch = useDispatch()
  const { login } = useAuth()

  const signUp = async (input: postSignUpRequest) => {
    const { email, password, nickname, subscribeNewsLetter } = input
    await postSignUp({
      email,
      password,
      nickname,
      subscribeNewsLetter,
    })
    await login({ email: email!, password: password! })
    dispatch(setIsOpenSignUpForm(false))
  }
  return {
    signUp,
  }
}
