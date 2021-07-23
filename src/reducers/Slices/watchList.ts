import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock } from '../../lib/api/types'

type WatchListState = Stock[] | null

const initialState = null as WatchListState

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    setWatchlistState(state, action: PayloadAction<WatchListState>) {
      if (action.payload === null) {
        return (state = null)
      } else {
        if (action.payload.length < 1) return (state = null)
        return (state = action.payload)
      }
    },
    setAddWatchlist(state, action: PayloadAction<Stock>) {
      if (state) {
        state.unshift(action.payload)
      }
    },
    setDeleteWatchlist(state, action: PayloadAction<Stock>) {
      if (state) {
        return state.filter((state) => state.id !== action.payload.id)
      }
    },
  },
})

export default watchlistSlice
