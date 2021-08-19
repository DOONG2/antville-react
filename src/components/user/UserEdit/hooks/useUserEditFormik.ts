import { useFormik } from 'formik'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import userEditSlice from '../../../../reducers/Slices/userEdit'
import useNicknameValidation from '../../../auth/AuthSignUpForm/hooks/useNicknameValidation'
import useUploadFileValidation from './useUploadFileValidation'
import useEditProfile from './useEditProfile'

type Props = {
  initialNickname: string
  initialBio: string
}

export default function useUserEditFormik({
  initialBio,
  initialNickname,
}: Props) {
  const { setUploadFileUrl } = userEditSlice.actions
  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState<File>()
  const {
    nicknameError,
    isNicknameValid,
    setNicknameErrorHandler,
    validateNickname,
  } = useNicknameValidation()
  const { validateUloadFile, uploadFileError, isUploadFileValid } =
    useUploadFileValidation()

  const onChangeNickanme = useCallback((e: React.ChangeEvent<any>) => {
    const value = e.target.value
    formik.handleChange(e)
    validateNickname(value)
  }, [])
  const { tryEdit } = useEditProfile()

  const onChangeUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let file = e.currentTarget?.files?.[0]
      if (!validateUloadFile(file)) {
        setAvatar(undefined)
        dispatch(setUploadFileUrl(undefined))
        return
      }
      formik.handleChange(e)
      setAvatar(file)
      dispatch(setUploadFileUrl(URL.createObjectURL(file)))
    },
    []
  )

  const formik = useFormik({
    initialValues: {
      editNickname: initialNickname,
      editIntroduction: initialBio,
      editFile: '',
    },
    validationSchema: Yup.object().shape({
      editIntroduction: Yup.string().max(
        200,
        `자기소개는 200자까지 가능합니다. 못다한 이야기는 타임라인에서
      해주세요 :)`
      ),
    }),
    onSubmit: async ({ editIntroduction, editNickname }, { setSubmitting }) => {
      let bio = editIntroduction as string | undefined
      let nickname = editNickname as string | undefined
      if (initialNickname === editNickname) nickname = undefined
      if (initialBio === editIntroduction) bio = undefined
      try {
        setSubmitting(true)
        await tryEdit({
          bio,
          nickname,
          avatar: avatar,
        })
      } catch (error) {
        setSubmitting(false)
        if (error.data.errorCode === 601)
          setNicknameErrorHandler('이미 존재하는 닉네임 입니다.')
      }
    },
  })

  return {
    ...formik,
    nicknameError,
    isNicknameValid,
    uploadFileError,
    isUploadFileValid,
    onChangeNickanme,
    onChangeUpload,
  }
}
