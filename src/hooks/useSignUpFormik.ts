import { useFormik } from 'formik'
import * as Yup from 'yup'
import postSignUp from '../api/user/postSignUp'
import {
  checkNicknameLenght,
  check_nickname,
  isTakenEmail,
  isTakenNickName,
} from '../lib/validator'

const useSignUpFormik = () => {
  const formik = useFormik({
    initialValues: {
      email_signup: '',
      password_signup: '',
      subscribeNewsLetter_signup: true,
      passwordCheck_signup: '',
      nickname_signup: '',
    },
    validationSchema: Yup.object().shape({
      email_signup: Yup.string()
        .email('이메일 형식이 아닙니다.')
        .test('아이디 중복', '이미 존재하는 아이디입니다.', (email) =>
          isTakenEmail(email)
        )
        .required('아이디를 입력하세요.'),
      password_signup: Yup.string()
        .min(6, '비밀번호는 6자 이상이어야 합니다.')
        .required('비밀번호를 입력하세요.'),
      passwordCheck_signup: Yup.string()
        .oneOf(
          [Yup.ref('password_signup'), null],
          '비밀번호가 일치하지 않습니다.'
        )
        .required('비밀번호을 입력하세요'),
      nickname_signup: Yup.string()
        .matches(check_nickname, '사용 불가능한 닉네임입니다.')
        .test('한글 영어 제한', '사용 불가능한 닉네임입니다.', (nickname) =>
          checkNicknameLenght(nickname)
        )
        .test('닉네임 중복', '이미 존재하는 닉네임입니다.', (nickname) =>
          isTakenNickName(nickname)
        )
        .required('닉네임을 입력하세요.'),
    }),
    onSubmit: async (submitData, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      const {
        email_signup,
        password_signup,
        nickname_signup,
        subscribeNewsLetter_signup,
      } = submitData
      try {
        await postSignUp({
          email: email_signup,
          password: password_signup,
          nickname: nickname_signup,
          subscribeNewsLetter: subscribeNewsLetter_signup,
        })
        resetForm()
      } catch (error) {
        if (error.data.errorCode === 600) {
          console.log(error.data.message)
        } else if (error.data.errorCode === 601) {
          console.log(error.data.message)
        }
        resetForm()
      }
      setSubmitting(false)
    },
  })
  return formik
}

export default useSignUpFormik
