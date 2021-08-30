import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import deleteWatchlist from '../../../lib/api/stock/deleteWatchlist'
import putAddWatchlist from '../../../lib/api/stock/putAddWatchlist'
import AVStock from '../../../lib/models/av_stock'
import { addWatchlistEvent } from '../../../lib/utils/ga'
import stockSlice from '../../../reducers/Slices/stock'
import { selectIsWatchlist } from '../../../selectors/stockSelectors'
import { useRootState } from '../../common/hooks/useRootState'

type Props = {
  avStock: AVStock
}

export function useStockInfo({ avStock }: Props) {
  const initialWatching = useRootState((state) =>
    selectIsWatchlist(state, avStock.stock.symbol)
  )
  const [isWatchlist, setIsWatchlist] = useState<boolean>(initialWatching)
  const [watchUserCount, setWatchUserCount] = useState<number>(
    avStock.stock.stockCount.watchUserCount
  )
  const [isWatchlistLimit, setIsWatchlistLimit] = useState(false)

  const { addWatchlist, deleteOneWatchlist, addOrReplaceStockPrice } =
    stockSlice.actions

  useEffect(() => {
    setIsWatchlist(initialWatching)
    setWatchUserCount(avStock.stock.stockCount.watchUserCount)
  }, [avStock])

  const dispatch = useDispatch()

  const clickAddWatchlistButton = () => {
    const capturedValue = isWatchlist
    if (isWatchlist) {
      setIsWatchlist(false)
      if (watchUserCount > 0) {
        setWatchUserCount(watchUserCount - 1)
      }
    } else {
      setIsWatchlist(true)
      setWatchUserCount(watchUserCount + 1)
    }
    debounceApiCallback(capturedValue)
  }
  const debounceApiCallback = useCallback(
    debounce((isWatch: boolean) => {
      if (isWatch) {
        deleteWatchListApi()
      } else {
        addWatchListApi()
      }
    }, 300),
    [avStock.id]
  )

  const addWatchListApi = async () => {
    try {
      await putAddWatchlist(avStock.id)
      dispatch(addWatchlist(avStock.stock))
      addWatchlistEvent(avStock.title)
      if (avStock.hasPrice) {
        dispatch(addOrReplaceStockPrice(avStock.priceInfo!))
      }
    } catch (err) {
      if (err.data.errorCode) setIsWatchlist(false)
      if (err.data.errorCode === 700) setIsWatchlistLimit(true)
      if (watchUserCount > 0) {
        setWatchUserCount(watchUserCount - 1)
      }
    }
  }

  const deleteWatchListApi = async () => {
    try {
      await deleteWatchlist(avStock.id)
      dispatch(deleteOneWatchlist(avStock.id))
    } catch (err) {
      setIsWatchlist(true)
      setWatchUserCount(watchUserCount + 1)
    }
  }

  return {
    isWatchlist,
    watchUserCount,
    clickAddWatchlistButton,
    setIsWatchlistLimit,
    isWatchlistLimit,
  }
}
