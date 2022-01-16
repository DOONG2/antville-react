import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getStockPopular from 'src/api/stock/getStockPopular'
import {
  addMultiStockPrice,
  setPopularlistState,
} from 'src/features/Stock/StockSlice'

const useStockPopularQuery = () => {
  const queryClient = useQuery('stockPopular', () => getStockPopular())
  const { data } = queryClient
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(addMultiStockPrice(data.stockPriceInfos))
      dispatch(setPopularlistState(data.stocks))
    }
  }, [data])

  return { ...queryClient }
}

export default useStockPopularQuery
