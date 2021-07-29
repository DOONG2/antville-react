import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../lib/api/types'

type ProfileState = {
  user: User | null
  followUser: User | null
  followModal: string
}

const initialState = {
  user: null,
  followUser: null,
  followModal: '',
} as ProfileState

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
    },
    setProfileFollowUser(state, action: PayloadAction<User | null>) {
      state.followUser = action.payload
    },
    setProfileFollowModal(state, action: PayloadAction<string>) {
      state.followModal = action.payload
    },
  },
})

export default profileSlice
