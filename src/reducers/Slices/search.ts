import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock, User } from '../../lib/api/types'

export type SearchObject = {
  stocks: Stock[] | null
  users: User[] | null
}
type SearchState = {
  query: string
  search: SearchObject
}

const initialState = {
  query: '',
  search: {
    stocks: null,
    users: null,
  },
} as SearchState

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setStocks(state, action: PayloadAction<Stock[] | null>) {
      if (!state) return
      state.search.stocks = action.payload
    },
    setUsers(state, action: PayloadAction<User[] | null>) {
      if (!state) return
      state.search.users = action.payload
    },
  },
})

export default searchSlice
