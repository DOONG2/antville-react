import { MENTION_SEARCH_LIMIT, MENTION_SEARCH_PAGE } from 'src/constants/params'
import client from '../client'
import { Stock } from '../types'

const postSearchStock = async (query: string) => {
  const response = await client.post<Stock[]>(
    '/stock/search',
    {
      query,
    },
    {
      params: {
        page: MENTION_SEARCH_PAGE,
        limit: MENTION_SEARCH_LIMIT,
      },
    }
  )

  return response.data
}

export default postSearchStock
