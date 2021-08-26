import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../lib/api/types'
import authStorage from '../../lib/authStorage'
import userStorage from '../../lib/userStorage'

export type UserState = User | null

const initialState = null as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      if (action.payload === null) {
        userStorage.clear()
        authStorage.clear()
        return (state = null)
      } else {
        userStorage.set(action.payload)
        return (state = action.payload)
      }
    },
    setNickanme(state, action: PayloadAction<string>) {
      if (!state) return
      state.nickname = action.payload
    },
    setBio(state, action: PayloadAction<string>) {
      if (!state) return
      state.bio = action.payload
    },
  },
})

export default userSlice
