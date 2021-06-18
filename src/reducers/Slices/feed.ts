import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCommentsByIdResponse } from '../../api/comment/types'
import { Post } from '../../api/types'
import { Feed } from '../../types/feed'

type FeedState = Feed

const initialState = {
  activatedTab: 'all',
  posts: null,
  comments: null,
} as FeedState

const FeedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setTabAll(state) {
      state.activatedTab = 'all'
    },
    setTabWatchList(state) {
      state.activatedTab = 'watchlist'
    },

    setTabFollowing(state) {
      state.activatedTab = 'following'
    },
    setPosts(state, action: PayloadAction<Post[] | undefined | null>) {
      if (action.payload === undefined) return
      state.posts = action.payload
    },
    setComments(
      state,
      action: PayloadAction<getCommentsByIdResponse | null | undefined>
    ) {
      if (action.payload === undefined) return
      state.comments = action.payload
    },
  },
})

export default FeedSlice
