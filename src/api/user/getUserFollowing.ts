import { userListLimit } from '../../lib/variable'
import client from '../client'
import { User } from '../types'

export default async function getUserFollowing(id: string, cursor?: string) {
  const response = await client.get<User[]>(`/user/${id}/following`, {
    params: {
      limit: userListLimit,
      cursor,
    },
  })

  return response.data
}
