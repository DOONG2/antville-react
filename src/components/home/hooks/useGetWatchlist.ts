import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import getWatchList from '../../../lib/api/stock/getWatchList'
import stockSlice from '../../../reducers/Slices/stock'
import { useRootState } from '../../common/hooks/useRootState'
import * as Sentry from '@sentry/react'

export default function useGetWatchlist() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { setWatchlistState, addMutiStockPrice } = stockSlice.actions
  const watchlist = useRootState((state) => state.stock.watchlist)
  const user = useRootState((state) => state.user)

  const getWatchlistApi = async () => {
    try {
      const watchlist = await getWatchList()
      if (watchlist?.stocks) {
        dispatch(setWatchlistState(watchlist.stocks))
        dispatch(addMutiStockPrice(watchlist.stockPriceInfos))
      }
    } catch (err) {
      Sentry.captureException(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!user) {
      dispatch(setWatchlistState(null))
    } else {
      if (!watchlist) {
        setIsLoading(true)
        getWatchlistApi()
      }
    }
  }, [user])

  return { isLoading, watchlist }
}
