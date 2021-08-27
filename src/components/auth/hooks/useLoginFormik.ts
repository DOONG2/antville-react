import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import loginStorage from '../../../lib/loginStorage'
import viewSlice from '../../../reducers/Slices/view'
import useAuth from './useAuth'

const useLoginFormik = () => {
  const { setIsFailLoginSubmit, setIsOpenLoginForm } = viewSlice.actions
  const dispatch = useDispatch()
  const { login } = useAuth()
  const id = loginStorage.get()?.id

  const formik = useFormik({
    initialValues: {
      emailLogin: id || '',
      passwordLogin: '',
      saveIdLogin: true,
    },
    validationSchema: Yup.object().shape({
      emailLogin: Yup.string()
        .required('아이디를 입력하세요.')
        .email('이메일 형식이 아닙니다.'),
      passwordLogin: Yup.string()
        .min(6, '비밀번호는 6자 이상이어야 합니다.')
        .required('비밀번호를 입력하세요.'),
    }),
    onSubmit: async (
      { emailLogin, passwordLogin, saveIdLogin },
      { setSubmitting }
    ) => {
      setSubmitting(true)
      try {
        await login({ email: emailLogin, password: passwordLogin })
        dispatch(setIsOpenLoginForm(false))
        if (saveIdLogin) loginStorage.set({ id: emailLogin })
        else loginStorage.clear()
      } catch (error) {
        setSubmitting(false)
        if (error.data.errorCode === 602 || error.data.errorCode === 603) {
          dispatch(setIsFailLoginSubmit(true))
        }
      }
    },
  })

  return formik
}

export default useLoginFormik
