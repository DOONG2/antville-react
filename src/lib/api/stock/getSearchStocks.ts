import { search_preview_limit, search_preview_page } from '../../variable'
import client from '../client'
import { Stock } from '../types'

export default async function getSearchStocks(query: string) {
  const response = await client.post<Stock[]>(
    `/stock/search`,
    {
      query,
    },
    {
      params: {
        limit: search_preview_limit,
        page: search_preview_page,
      },
    }
  )

  return response.data
}
