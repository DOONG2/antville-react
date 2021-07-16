import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCommentsByIdResponse } from '../../api/comment/types'
import { Post } from '../../api/types'
import {
  activated_all,
  activated_following,
  activated_user,
  activated_user_like,
  activated_watchlist,
} from '../../lib/variable'
import { Feed } from '../../types/feed'

type FeedState = Feed

const initialState = {
  activatedTab: activated_all,
  activatedUseTab: activated_user,
  posts: null,
  userPosts: null,
  comments: null,
  stockId: undefined,
} as FeedState

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setTabAll(state) {
      state.activatedTab = activated_all
      state.posts = null
    },
    setTabWatchList(state) {
      state.activatedTab = activated_watchlist
      state.posts = null
    },
    setTabFollowing(state) {
      state.activatedTab = activated_following
      state.posts = null
    },
    setTabUser(state) {
      state.activatedUseTab = activated_user
      state.posts = null
    },
    setTabUserLike(state) {
      state.activatedUseTab = activated_user_like
      state.posts = null
    },
    setPosts(state, action: PayloadAction<Post[] | undefined | null>) {
      if (action.payload === undefined) return
      state.posts = action.payload
    },
    setUserPosts(state, action: PayloadAction<Post[] | undefined | null>) {
      if (action.payload === undefined) return
      state.userPosts = action.payload
    },
    setComments(
      state,
      action: PayloadAction<getCommentsByIdResponse | null | undefined>
    ) {
      if (action.payload === undefined) return
      state.comments = action.payload
    },
    setStockId(state, action: PayloadAction<number>) {
      state.stockId = action.payload
    },
  },
})

export default feedSlice
