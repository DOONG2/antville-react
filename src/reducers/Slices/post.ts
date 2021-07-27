import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostState } from '../../lib/api/post/types'

const initialState = {
  body: '',
  isFocusInput: false,
} as PostState

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setBody(state, action: PayloadAction<string>) {
      state.body = action.payload
    },
    setIsFocusInput(state, action: PayloadAction<boolean>) {
      state.isFocusInput = action.payload
    },
  },
})

export default postSlice
