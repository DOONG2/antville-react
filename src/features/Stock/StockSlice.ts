import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock, StockPriceInfo } from 'src/api/types'

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

const StockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setPopularlistState(state, action: PayloadAction<StockState>) {
      state.popularList = action.payload
    },
    addOrReplaceStockPrice(state, action: PayloadAction<StockPriceInfo>) {
      const payload = action.payload
      if (payload) state.priceState[payload.symbol] = payload
    },
    addMultiStockPrice(state, action: PayloadAction<[StockPriceInfo?]>) {
      action.payload.forEach((sp) => (state.priceState[sp!.symbol] = sp!))
    },
  },
})

export const {
  setPopularlistState,
  addOrReplaceStockPrice,
  addMultiStockPrice,
} = StockSlice.actions

export default StockSlice
