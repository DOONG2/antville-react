import client from './client'
import { getSearchResponse } from './types'

const getSearch = async (word: string, next?: string) => {
  const response = await client.get<getSearchResponse>('/search', {
    params: {
      q: word,
      pos: next,
    },
  })

  return response.data
}

export default getSearch
