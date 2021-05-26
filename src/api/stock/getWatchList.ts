import client from '../client'
import { getWatchListResponse } from './types'

const getWatchList = async () => {
  const response = await client.get<getWatchListResponse | null>(
    '/stock/watchList'
  )

  return response.data
}

export default getWatchList
