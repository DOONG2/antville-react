import { combineReducers } from 'redux'
import viewSlice from './Slices/view'
import userSlice from './Slices/user'
import authSlice from './Slices/auth'
import watchlistSlice from './Slices/watchlist'

const rootReducer = combineReducers({
  view: viewSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer,
  watchlist: watchlistSlice.reducer,
})

export default rootReducer
