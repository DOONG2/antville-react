import { useFormik } from 'formik'
import * as Yup from 'yup'

const useLoginFormik = () => {
  const formik = useFormik({
    initialValues: { userId: '', password: '', saveId: false },
    validationSchema: Yup.object({
      userId: Yup.string()
        .required('아이디를 입력하세요.')
        .email('이메일 형식이 아닙니다.'),
      password: Yup.string().required('비밀번호를 입력하세요.'),
    }),
    onSubmit: (data, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      console.log(data)
      resetForm()
      setSubmitting(false)
    },
  })
  return formik
}

export default useLoginFormik
