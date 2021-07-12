import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import getWatchList from '../api/stock/getWatchList'
import { User } from '../api/types'
import authStorage from '../lib/authStorage'
import userStorage from '../lib/userStorage'
import authSlice from '../reducers/Slices/auth'
import userSlice from '../reducers/Slices/user'
import viewSlice from '../reducers/Slices/view'

import watchListSlice from '../reducers/Slices/watchList'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const { setAuthState } = authSlice.actions
  const { setIsLogging } = viewSlice.actions
  const { setWatchListState } = watchListSlice.actions

  const dispatch = useDispatch()

  const authorize = async (user: User) => {
    dispatch(setIsLogging(true))
    const watchList = await getWatchList()
    dispatch(setWatchListState(watchList))
    dispatch(setUserState(user))
    dispatch(setAuthState(authStorage.get()))

    userStorage.set(user)
    dispatch(setIsLogging(false))
  }
  const logout = () => {
    dispatch(setUserState(null))
    dispatch(setAuthState(null))
    dispatch(setWatchListState(null))
    userStorage.clear()
    authStorage.clear()
  }

  return {
    authorize,
    logout,
  }
}
