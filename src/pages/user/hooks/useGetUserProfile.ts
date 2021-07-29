import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRootState } from '../../../components/common/hooks/useRootState'
import getUserProfile from '../../../lib/api/user/getUserProfile'
import profileSlice from '../../../reducers/Slices/profile'

export default function useGetUserProfile(nickname: string) {
  const { user } = useRootState((state) => state.profile)
  const { setProfileUser } = profileSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserApi = async () => {
      const result = await getUserProfile(nickname)
      dispatch(setProfileUser(result))
    }
    getUserApi()
  }, [nickname])

  return { user }
}
