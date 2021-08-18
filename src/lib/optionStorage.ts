const key = 'OPTION'

type UserOption = {
  isPopularStockPause: boolean
}

const userOptionStorage = {
  getIsPause() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return false
      const parsed = JSON.parse(data) as UserOption
      return parsed.isPopularStockPause
    } catch (e) {
      localStorage.removeItem(key)
      return false
    }
  },
  setIsPause(isPause: boolean) {
    localStorage.setItem(key, JSON.stringify({ isPopularStockPause: isPause }))
  },
  clear() {
    localStorage.removeItem(key)
  },
}

export default userOptionStorage
