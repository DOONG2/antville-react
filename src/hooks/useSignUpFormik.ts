import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { getCurrentUser } from '../api/auth/getCurrentUser'
import postLogin from '../api/auth/postLogin'
import postSignUp from '../api/user/postSignUp'
import authStorage from '../lib/authStorage'
import {
  checkNicknameLength,
  check_nickname,
  isTakenEmail,
  isTakenNickName,
} from '../lib/validator'
import authSlice from '../reducers/Slices/auth'
import viewSlice from '../reducers/Slices/view'
import useAuth from './useAuth'

const useSignUpFormik = () => {
  const { setIsOpenSignUpForm } = viewSlice.actions
  const { setAuthState } = authSlice.actions
  const dispatch = useDispatch()
  const { authorize } = useAuth()
  const formik = useFormik({
    initialValues: {
      emailSignup: '',
      passwordSignup: '',
      subscribeNewsLetterSignup: true,
      passwordCheckSignup: '',
      nicknameSignup: '',
    },
    validationSchema: Yup.object().shape({
      emailSignup: Yup.string()
        .email('이메일 형식이 아닙니다.')
        .test('아이디 중복', '이미 존재하는 아이디입니다.', (email) =>
          isTakenEmail(email)
        )
        .required('아이디를 입력하세요.'),
      passwordSignup: Yup.string()
        .min(6, '비밀번호는 6자 이상이어야 합니다.')
        .required('비밀번호를 입력하세요.'),
      passwordCheckSignup: Yup.string()
        .oneOf(
          [Yup.ref('passwordSignup'), null],
          '비밀번호가 일치하지 않습니다.'
        )
        .required('비밀번호을 입력하세요'),
      nicknameSignup: Yup.string()
        .matches(check_nickname, '사용 불가능한 닉네임입니다.')
        .test('한글 영어 제한', '사용 불가능한 닉네임입니다.', (nickname) =>
          checkNicknameLength(nickname)
        )
        .test('닉네임 중복', '이미 존재하는 닉네임입니다.', (nickname) =>
          isTakenNickName(nickname)
        )
        .required('닉네임을 입력하세요.'),
    }),
    onSubmit: async (submitData, { setSubmitting }) => {
      setSubmitting(true)
      const {
        emailSignup,
        passwordSignup,
        nicknameSignup,
        subscribeNewsLetterSignup,
      } = submitData
      try {
        await postSignUp({
          email: emailSignup,
          password: passwordSignup,
          nickname: nicknameSignup,
          subscribeNewsLetter: subscribeNewsLetterSignup,
        })
        const { accessToken, refreshToken } = await postLogin({
          email: emailSignup,
          password: passwordSignup,
        })
        authStorage.set({ accessToken, refreshToken })
        dispatch(setAuthState({ accessToken, refreshToken }))
        const user = await getCurrentUser()
        authorize(user)
        dispatch(setIsOpenSignUpForm(false))
      } catch (error) {
        if (error.data.errorCode === 600) {
          console.log(error.data.message)
        } else if (error.data.errorCode === 601) {
          console.log(error.data.message)
        }
      }
      setSubmitting(false)
    },
  })
  return formik
}

export default useSignUpFormik
