import { userFollowListLimit } from '../../variable'
import client from '../client'
import { User } from '../types'

export default async function getUserFollowing(id: number, cursor?: number) {
  const response = await client.get<User[]>(`/user/${id}/following`, {
    params: {
      limit: userFollowListLimit,
      cursor,
    },
  })

  return response.data
}
