import { combineReducers } from 'redux'
import viewSlice from './Slices/view'
import userSlice from './Slices/user'
import authSlice from './Slices/auth'
import watchListSlice from './Slices/watchList'
import postSlice from './Slices/post'
import feedSlice from './Slices/feed'
import commentSlice from './Slices/comment'

const rootReducer = combineReducers({
  view: viewSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer,
  post: postSlice.reducer,
  feed: feedSlice.reducer,
  cooment: commentSlice.reducer,
  watchList: watchListSlice.reducer,
})

export default rootReducer
