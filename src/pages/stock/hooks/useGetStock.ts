import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import getStockByTicker from '../../../lib/api/stock/getStockByTicker'
import { Stock } from '../../../lib/api/types'
import stockSlice from '../../../reducers/Slices/stock'

export default function useGetStock(ticker: string) {
  const [stock, setStock] = useState<Stock>()
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const { addOrReplaceStockPrice } = stockSlice.actions

  useEffect(() => {
    try {
      const getStockApi = async () => {
        const result = await getStockByTicker(ticker)
        setStock(result.stock)
        dispatch(addOrReplaceStockPrice(result.stockPriceInfo))
        setLoading(false)
      }
      getStockApi()
    } catch (error) {
      setLoading(false)
    }
  }, [ticker])

  return { stock, loading }
}
