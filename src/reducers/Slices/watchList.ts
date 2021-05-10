import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock, StockPriceInfo } from '../../api/types'

type WatchListState = {
  stocks: [Stock]
  stockPriceInfos: [StockPriceInfo]
} | null

const initialState = null as WatchListState

const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    setWatchListState(
      state,
      action: PayloadAction<WatchListState | undefined>
    ) {
      if (action.payload === undefined) {
        return (state = null)
      } else {
        return (state = action.payload)
      }
    },
  },
})

export default watchListSlice
