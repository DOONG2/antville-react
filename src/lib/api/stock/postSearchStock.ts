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
        page: 0,
        limit: 5,
      },
    }
  )

  return response.data
}

export default postSearchStock
