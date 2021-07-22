import deleteFollow from '../../../lib/api/user/deleteFollow'
import putFollow from '../../../lib/api/user/putFollow'

export default function usePutFollow() {
  const putFollowApi = async (id: number) => {
    try {
      await putFollow(id)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFollowApi = async (id: number) => {
    try {
      await deleteFollow(id)
    } catch (error) {
      console.log(error)
    }
  }
  return { putFollowApi, deleteFollowApi }
}
