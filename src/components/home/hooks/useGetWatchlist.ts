import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import getWatchList from '../../../lib/api/stock/getWatchList'
import watchlistSlice from '../../../reducers/Slices/watchlist'
import { useRootState } from '../../common/hooks/useRootState'

export default function useGetWatchlist() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { setWatchlistState } = watchlistSlice.actions
  const { watchlist, user } = useRootState((state) => state)

  useEffect(() => {
    try {
      setIsLoading(true)
      if (!user) {
        dispatch(setWatchlistState(null))
        return setIsLoading(false)
      }
      const getWatchlistApi = async () => {
        const watchlist = await getWatchList()
        if (watchlist?.stocks) dispatch(setWatchlistState(watchlist.stocks))
        setIsLoading(false)
      }
      getWatchlistApi()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [user])

  return { isLoading, watchlist }
}
