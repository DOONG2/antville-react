import { useFormik } from 'formik'
import * as Yup from 'yup'

const usePostFormik = () => {
  const formik = useFormik({
    initialValues: {
      body: '',
      sentiment: '',
      ratio: 0,
    },
    validationSchema: Yup.object().shape({
      body: Yup.string().required(''),
    }),
    onSubmit: async () => {},
  })

  return formik
}

export default usePostFormik
