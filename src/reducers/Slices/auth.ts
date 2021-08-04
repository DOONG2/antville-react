import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Auth } from '../../lib/api/types'
import authStorage from '../../lib/authStorage'

type AuthState = Auth | null

const initialState = null as AuthState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<AuthState>) {
      if (action.payload === null) {
        authStorage.clear()
        return (state = null)
      } else {
        authStorage.set(action.payload)
        return (state = action.payload)
      }
    },
  },
})

export default authSlice
