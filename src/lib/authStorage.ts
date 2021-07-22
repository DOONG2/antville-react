import { Auth } from './api/types'

const key = 'TOKEN'

const authStorage = {
  get() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const parsed = JSON.parse(data) as Auth
      return parsed
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },
  set(auth: Auth) {
    localStorage.setItem(key, JSON.stringify(auth))
  },
  clear() {
    localStorage.removeItem(key)
  },
}

export default authStorage
