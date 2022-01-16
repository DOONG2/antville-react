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
    // 실시간 인기종목 상태 변경 리듀서
    setPopularlistState(state, action: PayloadAction<StockState>) {
      state.popularList = action.payload
    },
    // socket에 의한 가격 데이터 변경 리듀서
    addOrReplaceStockPrice(state, action: PayloadAction<StockPriceInfo>) {
      const payload = action.payload
      if (payload) state.priceState[payload.symbol] = payload
    },
    // API 에 의한 가격 데이터 변경 리듀서
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
