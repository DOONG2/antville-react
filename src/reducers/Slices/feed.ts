import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Feed } from '../../types/feed'

type FeedState = Feed

const initialState = {
  activatedTab: 'all',
} as FeedState

const FeedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setTabAll(state) {
      state.activatedTab = 'all'
    },
    setTabWatchList(state) {
      state.activatedTab = 'watchList'
    },

    setTabFollowing(state) {
      state.activatedTab = 'following'
    },
  },
})

export default FeedSlice
