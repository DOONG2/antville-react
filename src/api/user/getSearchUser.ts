import { MENTION_SEARCH_LIMIT } from './../../constants/params'
import { MENTION_SEARCH_PAGE } from 'src/constants/params'
import client from '../client'
import { User } from '../types'

export default async function getSearchUser(query: string) {
  const response = await client.get<User[]>('/user/search', {
    params: {
      query,
      page: MENTION_SEARCH_PAGE,
      limit: MENTION_SEARCH_LIMIT,
    },
  })

  return response.data
}
