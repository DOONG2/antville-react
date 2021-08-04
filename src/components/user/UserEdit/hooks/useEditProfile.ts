import { useHistory } from 'react-router-dom'
import useUserAvatar from './useUserAvatar'
import useUserEditForm from './useUserEditForm'

type TryEditProps = {
  nickname?: string
  bio?: string
  avatar?: File
}

export default function useEditProfile() {
  const history = useHistory()

  const { editFormApi } = useUserEditForm()

  const { UserAvatarApi } = useUserAvatar()

  const tryEdit = async ({ nickname, bio, avatar }: TryEditProps) => {
    try {
      if (avatar) await UserAvatarApi({ avatar })
      if (!nickname && !bio) return
      await editFormApi({ nickname, bio })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    tryEdit,
  }
}
