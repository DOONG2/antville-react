import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentState } from '../../lib/api/comment/types'

const initialState = {
  body: '',
  isFocusInput: false,
} as CommentState

const commentSlice = createSlice({
  name: 'comment',
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

export default commentSlice
