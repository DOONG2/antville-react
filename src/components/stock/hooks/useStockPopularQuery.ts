import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getStockPopular from '../../../lib/api/stock/getStockPopular'
import stockSlice from '../../../reducers/Slices/stock'
import { useRootState } from '../../common/hooks/useRootState'

const useStockPopularQuery = () => {
  const { isLoading, data, refetch } = useQuery('stockPopular', () =>
    getStockPopular()
  )
  const { setPopularlistState, addMutiStockPrice } = stockSlice.actions
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
      dispatch(addMutiStockPrice(data.stockPriceInfos))
    }
  }, [data])

  return { isLoading, stocks: data?.stocks }
}

export default useStockPopularQuery
