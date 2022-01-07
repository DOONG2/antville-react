import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PostState = {
  body: string
}

const initialState = {
  body: '',
} as PostState

const PostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    setPostBody(state, action: PayloadAction<string>) {
      state.body = action.payload
    },
  },
})

export const { setPostBody } = PostSlice.actions

export default PostSlice
