import { combineReducers } from 'redux'
import viewSlice from './Slices/view'
import userSlice from './Slices/user'
import authSlice from './Slices/auth'
import watchlistSlice from './Slices/watchlist'
import postSlice from './Slices/post'
import commentSlice from './Slices/comment'
import subCommentSlice from './Slices/subComment'

const rootReducer = combineReducers({
  view: viewSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer,
  post: postSlice.reducer,
  comment: commentSlice.reducer,
  subComment: subCommentSlice.reducer,
  watchlist: watchlistSlice.reducer,
})

export default rootReducer
