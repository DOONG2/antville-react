import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import userSlice from '../../../../reducers/Slices/user'
import useUserAvatar from './useUserAvatar'
import useUserEditForm from './useUserEditForm'

type TryEditProps = {
  nickname?: string
  bio?: string
  avatar?: File
}

export default function useEditProfile() {
  const history = useHistory()
  const { setNickanme, setBio } = userSlice.actions
  const dispatch = useDispatch()

  const { editFormApi } = useUserEditForm()

  const { UserAvatarApi } = useUserAvatar()

  const tryEdit = async ({ nickname, bio, avatar }: TryEditProps) => {
    if (avatar) await UserAvatarApi({ avatar })
    if (!nickname && !bio) return history.push('/')
    await editFormApi({ nickname, bio })
    if (nickname) dispatch(setNickanme(nickname))
    if (bio) dispatch(setBio(bio))
    history.push('/')
  }

  return {
    tryEdit,
  }
}
