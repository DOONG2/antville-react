import client from '../client'
import { StockType } from '../types'

export default async function getStockByTicker(ticker: string) {
  const response = await client.get<StockType>(`/stock/${ticker}`)

  return response.data
}
