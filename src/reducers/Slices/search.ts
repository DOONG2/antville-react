import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock, User } from '../../lib/api/types'
import searchStorage from '../../lib/searchStorage'

export type SearchObject = {
  stocks: Stock[] | null
  users: User[] | null
}
type SearchState = {
  search: SearchObject
  history: SearchObject
}

const { getHistoryStocks, getHistoryUsers } = searchStorage

const initialState = {
  history: {
    stocks: getHistoryStocks(),
    users: getHistoryUsers(),
  },
  search: {
    stocks: null,
    users: null,
  },
} as SearchState

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setStocks(state, action: PayloadAction<Stock[] | null>) {
      if (!state) return
      state.search.stocks = action.payload
    },
    setUsers(state, action: PayloadAction<User[] | null>) {
      if (!state) return
      state.search.users = action.payload
    },
    setHistoryStocks(state, action: PayloadAction<Stock[] | null>) {
      if (!state) return
      state.history.stocks = action.payload
    },
    setHistoryUsers(state, action: PayloadAction<User[] | null>) {
      if (!state) return
      state.history.users = action.payload
    },
  },
})

export default searchSlice
