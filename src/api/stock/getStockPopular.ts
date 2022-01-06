import client from '../client'

import { GetStockPopularResponse } from './types'

const getStockPopular = async () => {
  const response = await client.get<GetStockPopularResponse>('/stock/popular')

  return response.data
}

export default getStockPopular
