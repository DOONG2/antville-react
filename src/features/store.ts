import { configureStore } from '@reduxjs/toolkit'
import FeedSlice from './Feed/FeedSlice'
import PostSlice from './Post/PostSlice'
import StockSlice from './Stock/StockSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      [StockSlice.name]: StockSlice.reducer,
      [PostSlice.name]: PostSlice.reducer,
      [FeedSlice.name]: FeedSlice.reducer,
    },
  })
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
