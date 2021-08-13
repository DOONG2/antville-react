import { useEffect, useState } from 'react'
import getStockByTicker from '../../../lib/api/stock/getStockByTicker'
import AVStock from '../../../lib/models/av_stock'

export default function useGetStock(ticker: string) {
  const [avStock, setStock] = useState<AVStock>()

  useEffect(() => {
    try {
      const getStockApi = async () => {
        const result = await getStockByTicker(ticker)
        setStock(new AVStock(result.stock, result.stockPriceInfo))
      }
      getStockApi()
    } catch (error) {
      console.log(error)
    }
  }, [ticker])

  return { avStock }
}
