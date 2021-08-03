import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../lib/api/types'

export type UserState = User | null

const initialState = null as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      if (action.payload === null) {
        return (state = null)
      } else {
        return (state = action.payload)
      }
    },
  },
})

export default userSlice
