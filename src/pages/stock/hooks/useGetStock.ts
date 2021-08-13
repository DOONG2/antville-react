import { useEffect, useState } from 'react'
import getStockByTicker from '../../../lib/api/stock/getStockByTicker'
import AVStock from '../../../lib/models/av_stock'

export default function useGetStock(ticker: string) {
  const [avStock, setStock] = useState<AVStock>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    try {
      const getStockApi = async () => {
        const result = await getStockByTicker(ticker)
        setStock(new AVStock(result.stock, result.stockPriceInfo))
        setLoading(false)
      }
      getStockApi()
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [ticker])

  return { avStock, loading }
}
