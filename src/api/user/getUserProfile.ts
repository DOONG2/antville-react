import client from '../client'
import { User } from '../types'

export default async function getUserProfile(nickname: string) {
  const response = await client.get<User>(`/user/${nickname}/profile`)

  return response.data
}
