import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import getWatchList from '../../../lib/api/stock/getWatchList'
import stockSlice from '../../../reducers/Slices/stock'
import { selectWatchlist } from '../../../selectors/stockSelectors'
import { useRootState } from '../../common/hooks/useRootState'

export default function useGetWatchlist() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { setWatchlistState, addMutiStockPrice } = stockSlice.actions
  const watchlist = useRootState((state) => selectWatchlist(state))
  const user = useRootState((state) => state.user)

  useEffect(() => {
    try {
      if (!user) {
        dispatch(setWatchlistState(null))
      } else {
        if (!watchlist) {
          setIsLoading(true)
          const getWatchlistApi = async () => {
            const watchlist = await getWatchList()
            if (watchlist?.stocks) {
              dispatch(setWatchlistState(watchlist.stocks))
              dispatch(addMutiStockPrice(watchlist.stockPriceInfos))
            }
            setIsLoading(false)
          }
          getWatchlistApi()
        }
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [user])

  return { isLoading, watchlist }
}
