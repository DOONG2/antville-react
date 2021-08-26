import { combineReducers } from 'redux'
import viewSlice from './Slices/view'
import userSlice from './Slices/user'
import postSlice from './Slices/post'
import commentSlice from './Slices/comment'
import searchSlice from './Slices/search'
import profileSlice from './Slices/profile'
import userEditSlice from './Slices/userEdit'
import formSlice from './Slices/form'
import stockSlice from './Slices/stock'
import newPostSlice from './Slices/newPost'

const rootReducer = combineReducers({
  view: viewSlice.reducer,
  user: userSlice.reducer,
  post: postSlice.reducer,
  comment: commentSlice.reducer,
  form: formSlice.reducer,
  search: searchSlice.reducer,
  profile: profileSlice.reducer,
  stock: stockSlice.reducer,
  userEdit: userEditSlice.reducer,
  newPost: newPostSlice.reducer,
})

export default rootReducer
