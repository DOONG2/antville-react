import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import getWatchList from '../api/stock/getWatchList'
import { User } from '../api/types'
import authStorage from '../lib/authStorage'
import userStorage from '../lib/userStorage'
import authSlice from '../reducers/Slices/auth'
import userSlice from '../reducers/Slices/user'

import watchListSlice from '../reducers/Slices/watchList'

export default function useAuth() {
  const { setUserState } = userSlice.actions
  const { setAuthState } = authSlice.actions
  const { setWatchListState } = watchListSlice.actions

  const dispatch = useDispatch()

  const authorize = async (user: User) => {
    dispatch(setUserState(user))
    dispatch(setAuthState(authStorage.get()))
    const watchList = await getWatchList()
    dispatch(setWatchListState(watchList))

    userStorage.set(user)
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
