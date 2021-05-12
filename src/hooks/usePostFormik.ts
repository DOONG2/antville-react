import { useFormik } from 'formik'
import * as Yup from 'yup'

const usePostFormik = () => {
  const formik = useFormik({
    initialValues: {
      postBody: '',
      sentiment: '',
      ratio: 0,
    },
    validationSchema: Yup.object().shape({
      postBody: Yup.string()
        .max(1000, '1000자 이하를 입력해주세요.')
        .required('입력해주세요'),
    }),
    onSubmit: async () => {},
  })

  return formik
}

export default usePostFormik
