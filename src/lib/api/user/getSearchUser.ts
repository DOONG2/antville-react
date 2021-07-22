import client from '../client'
import { User } from '../types'

export default async function getSearchUser(query: string) {
  const response = await client.get<User[]>('/user/search', {
    params: {
      query,
      page: 0,
      limit: 5,
    },
  })

  return response.data
}
