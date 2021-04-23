import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import postLogin from '../api/user/postLogin'
import viewSlice from '../reducers/Slices/view'

const useLoginFormik = () => {
  const { setIsFailLoginSubmit } = viewSlice.actions
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { email_login: '', password_login: '', saveId_login: true },
    validationSchema: Yup.object().shape({
      email_login: Yup.string()
        .required('아이디를 입력하세요.')
        .email('이메일 형식이 아닙니다.'),
      password_login: Yup.string()
        .min(6, '비밀번호는 6자 이상이어야 합니다.')
        .required('비밀번호를 입력하세요.'),
    }),
    onSubmit: async (
      { email_login, password_login, saveId_login },
      { setSubmitting, resetForm }
    ) => {
      setSubmitting(true)
      try {
        await postLogin({
          email: email_login,
          password: password_login,
        })
        resetForm()
      } catch (error) {
        if (error.data.errorCode === 602 || error.data.errorCode === 603) {
          dispatch(setIsFailLoginSubmit(true))
          console.log('done')
          console.log(error.data)
        }
      }
      setSubmitting(false)
    },
  })

  console.log(formik)

  return formik
}

export default useLoginFormik
