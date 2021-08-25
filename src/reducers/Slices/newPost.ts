import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../lib/api/types'

const initialState = [] as Post[]

const newPostSlice = createSlice({
  name: 'newPost',
  initialState,
  reducers: {
    addNewPost(state, action: PayloadAction<Post>) {
      state.unshift(action.payload)
    },
    reset(state) {
      return (state = [])
    },
  },
})

export default newPostSlice
