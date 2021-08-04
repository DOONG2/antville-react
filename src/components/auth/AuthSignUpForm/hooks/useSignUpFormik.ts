import { useFormik } from 'formik'
import { useCallback } from 'react'
import * as Yup from 'yup'
import useEmailValidation from './useEmailValidation'
import useNicknameValidation from './useNicknameValidation'
import useSignUp from './useSignUp'

export default function useSignUpFormik() {
  const { emailError, isEmailValid, validateEmail, setSignUpEmailError } =
    useEmailValidation()
  const {
    nicknameError,
    isNicknameValid,
    validateNickname,
    setNicknameErrorHandler,
  } = useNicknameValidation()
  const { signUp } = useSignUp()

  const onChangeEmail = useCallback((e: React.ChangeEvent<any>) => {
    const value = e.target.value
    formik.handleChange(e)
    validateEmail(value)
  }, [])

  const onChangeNickname = useCallback((e: React.ChangeEvent<any>) => {
    const value = e.target.value
    formik.handleChange(e)
    validateNickname(value)
  }, [])

  const formik = useFormik({
    initialValues: {
      emailSignup: '',
      passwordSignup: '',
      subscribeNewsLetterSignup: true,
      passwordCheckSignup: '',
      nicknameSignup: '',
    },
    validationSchema: Yup.object().shape({
      passwordSignup: Yup.string()
        .min(6, '비밀번호는 6자 이상이어야 합니다.')
        .required('비밀번호를 입력하세요.'),
      passwordCheckSignup: Yup.string()
        .oneOf(
          [Yup.ref('passwordSignup'), null],
          '비밀번호가 일치하지 않습니다.'
        )
        .required('비밀번호을 입력하세요'),
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
        await signUp({
          email: emailSignup,
          password: passwordSignup,
          nickname: nicknameSignup,
          subscribeNewsLetter: subscribeNewsLetterSignup,
        })
      } catch (error) {
        if (error.data.errorCode === 600) {
          setSignUpEmailError('이미 존재하는 이메일입니다.')
        } else if (error.data.errorCode === 601) {
          setNicknameErrorHandler('이미 존재하는 닉네임 입니다.')
        }
      }
      setSubmitting(false)
    },
  })
  return {
    ...formik,
    emailError,
    isEmailValid,
    onChangeEmail,
    nicknameError,
    isNicknameValid,
    onChangeNickname,
  }
}
