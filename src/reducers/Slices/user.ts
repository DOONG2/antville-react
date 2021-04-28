import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../api/types'

type UserState = User | null

const initialState = null as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState | null>) {
      if (action.payload === null) {
        return (state = null)
      } else {
        return (state = action.payload)
      }
    },
  },
})

export default userSlice
