import { combineReducers } from 'redux'
import viewSlice from './Slices/view'
import userSlice from './Slices/user'
import authSlice from './Slices/auth'
import watchlistSlice from './Slices/watchlist'
import postSlice from './Slices/post'
import commentSlice from './Slices/comment'
import searchSlice from './Slices/search'
import profileSlice from './Slices/profile'

const rootReducer = combineReducers({
  view: viewSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer,
  post: postSlice.reducer,
  profile: profileSlice.reducer,
  comment: commentSlice.reducer,
  search: searchSlice.reducer,
  watchlist: watchlistSlice.reducer,
})

export default rootReducer
