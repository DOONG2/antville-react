import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../api/types'
import { Feed } from '../../types/feed'

type FeedState = Feed

const initialState = {
  activatedTab: 'all',
  posts: null,
  isScrolled: false,
} as FeedState

const FeedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setTabAll(state) {
      state.activatedTab = 'all'
      state.isScrolled = false
    },
    setTabWatchList(state) {
      state.activatedTab = 'watchList'
      state.isScrolled = false
    },

    setTabFollowing(state) {
      state.activatedTab = 'following'
      state.isScrolled = false
    },
    setPosts(state, action: PayloadAction<Post[] | null | undefined>) {
      if (action.payload === undefined) return
      state.posts = action.payload
    },
    setScrolled(state, action: PayloadAction<boolean>) {
      state.isScrolled = action.payload
    },
  },
})

export default FeedSlice
