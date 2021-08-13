import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getStockPopular from '../../../lib/api/stock/getStockPopular'
import stockSlice from '../../../reducers/Slices/stock'

const useStockPopularQuery = () => {
  const { isLoading, data } = useQuery('stockPopular', () => getStockPopular())
  const { setPopularlistState, addMutiStockPrice } = stockSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setPopularlistState(data.stocks))
      dispatch(addMutiStockPrice(data.stockPriceInfos))
    }
  }, [data])

  return { isLoading, stocks: data?.stocks }
}

export default useStockPopularQuery
