import { combineReducers } from 'redux'
import viewSlice from './Slices/view'
import userSlice from './Slices/user'
import authSlice from './Slices/auth'
import watchListSlice from './Slices/watchList'
import postSlice from './Slices/post'
import commentSlice from './Slices/comment'

const rootReducer = combineReducers({
  view: viewSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer,
  post: postSlice.reducer,
  cooment: commentSlice.reducer,
  watchList: watchListSlice.reducer,
})

export default rootReducer
