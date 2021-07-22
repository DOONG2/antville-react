import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { isTakenEmail } from '../lib/validator'
// import { useDispatch } from 'react-redux'
// import viewSlice from '../reducers/Slices/view'

const useFindPasswordFormik = () => {
  // const { setIsFailFindPasswordSubmit } = viewSlice.actions
  // const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { email_find: '' },
    validationSchema: Yup.object().shape({
      email_find: Yup.string()
        .email('이메일 형식이 아닙니다.')
        .required('아이디를 입력하세요.'),
    }),
    onSubmit: async ({ email_find }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      // TODO: API try catch
      setSubmitting(false)
    },
  })

  return formik
}

export default useFindPasswordFormik
