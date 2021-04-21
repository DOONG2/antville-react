import { useFormik } from 'formik'
import * as Yup from 'yup'
import { checkNickName, check_nickname } from '../lib/validator'

const useSignUpFormik = () => {
  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
      saveId: false,
      passwordCheck: '',
      nickname: '',
    },
    validationSchema: Yup.object({
      userId: Yup.string()
        .email('이메일 형식이 아닙니다.')
        .required('아이디를 입력하세요.'),
      password: Yup.string()
        .min(6, '6자리 이상의 비밀번호를 사용하세요.')
        .required('비밀번호를 입력하세요.'),
      passwordCheck: Yup.string()
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호을 입력하세요'),
      nickname: Yup.string()
        .matches(check_nickname, '사용 불가능한 닉네임입니다.')
        .test('한글 영어 제한', '사용 불가능한 닉네임입니다.', (value) =>
          checkNickName(value)
        )
        .required('닉네임을 입력하세요.'),
    }),
    onSubmit: (data, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      resetForm()
      console.log(data)
      setSubmitting(false)
    },
  })
  return formik
}

export default useSignUpFormik
