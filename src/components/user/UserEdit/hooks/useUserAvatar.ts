import { useDispatch } from 'react-redux'
import postUserAvatar from '../../../../lib/api/user/postUserAvatar'
import userEditSlice from '../../../../reducers/Slices/userEdit'

type Props = {
  avatar: File
}

export default function useUserAvatar() {
  const { setUploadFileUrl } = userEditSlice.actions
  const dispatch = useDispatch()
  const UserAvatarApi = async ({ avatar }: Props) => {
    const formData = new FormData()
    formData.append('profiles', avatar)
    const result = await postUserAvatar(formData)
    dispatch(setUploadFileUrl(result.profileImg))
  }

  return { UserAvatarApi }
}
