import client from './client'
import { getSearchResponse } from './types'

const getSearch = async (word: string) => {
  const response = await client.get<getSearchResponse>('/search', {
    params: {
      q: word,
    },
  })

  return response.data
}

export default getSearch
