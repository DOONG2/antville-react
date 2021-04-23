import client from '../client'
import { StockPopularType } from '../types'

const getStockPopular = async (): Promise<StockPopularType> => {
  const { data } = await client.get('/stock/popular')

  return data
}

export default getStockPopular
