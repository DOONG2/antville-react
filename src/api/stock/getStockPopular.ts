import client from '../client'

import { getStockPopularResponse } from './types'

const getStockPopular = async () => {
  const response = await client.get<getStockPopularResponse>('/stock/popular')

  return response.data
}

export default getStockPopular
