import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../lib/api/types'

type ProfileState = {
  user: User | null
}

const initialState = {
  user: null,
} as ProfileState

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
    },
  },
})

export default profileSlice
