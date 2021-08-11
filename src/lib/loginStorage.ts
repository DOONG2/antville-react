import { LoginStorageType } from '../types/login'

const key = 'LOGIN'

const loginStorage = {
  get() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const parsed = JSON.parse(data) as LoginStorageType
      return parsed
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },
  set(value: LoginStorageType) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  clear() {
    localStorage.removeItem(key)
  },
}

export default loginStorage
