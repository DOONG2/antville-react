import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock, StockPriceInfo } from '../../lib/api/types'

type StockState = Stock[] | null
type StockPriceState = { [key: string]: StockPriceInfo }

type initialType = {
  watchlist: StockState
  popularList: StockState
  priceState: StockPriceState
}
const initialState = {
  watchlist: null,
  popularList: null,
  priceState: {},
} as initialType

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    reset(state) {
      state = initialState
    },
    setWatchlistState(state, action: PayloadAction<StockState>) {
      state.watchlist = action.payload
    },
    addWatchlist(state, action: PayloadAction<Stock>) {
      state.watchlist?.unshift(action.payload)
    },
    deleteOneWatchlist(state, action: PayloadAction<number>) {
      if (state.watchlist) {
        state.watchlist = state.watchlist.filter((w) => w.id !== action.payload)
        if (!state.popularList?.find((p) => p.id === action.payload)) {
          delete state.priceState[action.payload]
        }
      }
    },
    setPopularlistState(state, action: PayloadAction<StockState>) {
      state.popularList = action.payload
    },
    addOrReplaceStockPrice(state, action: PayloadAction<StockPriceInfo>) {
      const payload = action.payload
      if (payload) {
        state.priceState[payload.symbol] = payload
      }
    },
    addMutiStockPrice(state, action: PayloadAction<[StockPriceInfo?]>) {
      action.payload
        .filter((v) => v)
        .forEach((sp) => (state.priceState[sp!.symbol] = sp!))
    },
  },
})

export default stockSlice
