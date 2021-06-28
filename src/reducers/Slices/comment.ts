import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { commentState } from '../../types/comment'

const initialState = {
  isSubmitted: false,
} as commentState

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setIsSubmitted(state, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload
    },
    setIntialize(state) {
      state.isSubmitted = false
    },
  },
})

export default commentSlice
