import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getStockPopular from 'src/api/stock/getStockPopular'
import { useRootState } from 'src/components/common/hooks/useRootState'
import {
  addMultiStockPrice,
  setPopularlistState,
} from 'src/features/Stock/StockSlice'

const useStockPopularQuery = () => {
  const { isLoading, data, refetch } = useQuery('stockPopular', () =>
    getStockPopular()
  )

  const popularList = useRootState((state) => state.stock.popularList)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!popularList) {
      refetch()
    }
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(setPopularlistState(data.stocks))
      dispatch(addMultiStockPrice(data.stockPriceInfos))
    }
  }, [data])

  return { isLoading, stocks: data?.stocks }
}

export default useStockPopularQuery
