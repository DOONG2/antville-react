import { getWatchListResponse } from './api/stock/types'

const key = 'WATCHLIST'

const watchlistStorage = {
  get() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const parsed = JSON.parse(data) as getWatchListResponse | null
      return parsed
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },
  set(watchlist: getWatchListResponse | null) {
    if (watchlist === null) return
    localStorage.setItem(key, JSON.stringify(watchlist))
  },
  clear() {
    localStorage.removeItem(key)
  },
}

export default watchlistStorage
