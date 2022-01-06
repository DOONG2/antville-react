import { configureStore } from '@reduxjs/toolkit'
import StockSlice from './Stock/StockSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      [StockSlice.name]: StockSlice.reducer,
    },
  })
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
