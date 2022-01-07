import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FeedState = {
  body: string
}

const initialState = {
  body: '',
} as FeedState

const FeedSlice = createSlice({
  name: 'Feed',
  initialState,
  reducers: {
    setFeedBody(state, action: PayloadAction<string>) {
      state.body = action.payload
    },
  },
})

export const { setFeedBody } = FeedSlice.actions

export default FeedSlice
