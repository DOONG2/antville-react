import client from '../client'
import { getWatchListResponse } from './types'

const getWatchList = async () => {
  const response = await client.get<getWatchListResponse | null>(
    '/stock/watchlist'
  )

  return response.data
}

export default getWatchList
