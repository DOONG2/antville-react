import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  checkNicknameLength,
  check_nickname,
  isTakenNickName,
} from '../../../lib/validator'

export default function useUserEditFormik() {
  const formik = useFormik({
    initialValues: { editNickname: '', editWebSite: '', editIntroduction: '' },
    validationSchema: Yup.object().shape({
      editNickname: Yup.string()
        .matches(check_nickname, '사용 불가능한 닉네임입니다.')
        .test('한글 영어 제한', '사용 불가능한 닉네임입니다.', (nickname) =>
          checkNicknameLength(nickname)
        )
        .test('닉네임 중복', '이미 존재하는 닉네임입니다.', (nickname) =>
          isTakenNickName(nickname)
        )
        .required('닉네임을 입력하세요.'),
      editWebSite: Yup.string().url(
        '올바르지 않은 주소입니다. 주소를 다시 입력해주세요.'
      ),
      editIntroduction: Yup.string().max(200, ''),
    }),
    onSubmit: async (
      { editNickname, editWebSite, editIntroduction },
      { setSubmitting, resetForm }
    ) => {
      try {
      } catch (error) {
        console.log(error)
      }
    },
  })

  return formik
}
