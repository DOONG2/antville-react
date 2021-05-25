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
    setWatchListState(state, action: PayloadAction<WatchListState>) {
      if (action.payload?.stocks === undefined) {
        return (state = null)
      } else {
        if (action.payload.stocks.length < 1) return (state = null)
        return (state = action.payload)
      }
    },
  },
})

export default watchListSlice
