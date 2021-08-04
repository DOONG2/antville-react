import { useEffect, useState } from 'react'
import getStockByTicker from '../../../lib/api/stock/getStockByTicker'
import { StockType } from '../../../lib/api/types'

export default function useGetStock(ticker: string) {
  const [stock, setStock] = useState<StockType>()

  useEffect(() => {
    try {
      const getStockApi = async () => {
        const result = await getStockByTicker(ticker)
        setStock(result)
      }
      getStockApi()
    } catch (error) {
      console.log(error)
    }
  }, [ticker])

  return { stock }
}