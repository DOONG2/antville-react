import { userListLimit } from '../../lib/variable'
import client from '../client'
import { User } from '../types'

export default async function getUserFollower(id: string, cursor?: string) {
  const response = await client.get<User[]>(`/user/${id}/followers`, {
    params: {
      limit: userListLimit,
      cursor,
    },
  })

  return response.data
}
