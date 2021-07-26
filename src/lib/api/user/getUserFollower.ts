import { userFollowListLimit } from '../../variable'
import client from '../client'
import { User } from '../types'

export default async function getUserFollower(id: number, cursor?: number) {
  const response = await client.get<User[]>(`/user/${id}/followers`, {
    params: {
      limit: userFollowListLimit,
      cursor,
    },
  })

  return response.data
}
