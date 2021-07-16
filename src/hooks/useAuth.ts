import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import getWatchList from '../api/stock/getWatchList'
import { User } from '../api/types'
import authStorage from '../lib/authStorage'
import userStorage from '../lib/userStorage'
import watchlistStorage from '../lib/watchlistStorage'
import authSlice from '../reducers/Slices/auth'
import userSlice from '../reducers/Slices/user'

import watchListSlice from '../reducers/Slices/watchList'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const { setAuthState } = authSlice.actions

  const { setWatchListState } = watchListSlice.actions

  const dispatch = useDispatch()

  const authorize = async (user: User) => {
    const watchList = await getWatchList()
    watchlistStorage.set(watchList)
    dispatch(setWatchListState(watchList))
    dispatch(setUserState(user))
    dispatch(setAuthState(authStorage.get()))

    userStorage.set(user)
  }
  const logout = () => {
    dispatch(setUserState(null))
    dispatch(setAuthState(null))
    dispatch(setWatchListState(null))
    watchlistStorage.clear()
    userStorage.clear()
    authStorage.clear()
  }

  return {
    authorize,
    logout,
  }
}
