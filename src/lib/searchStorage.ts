import _ from 'lodash'
import { Stock } from './api/types'

const key = 'SEARCH'

const searchStorage = {
  get() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const parsed = JSON.parse(data) as Stock[]
      return parsed
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },
  set(stock: Stock) {
    const data = localStorage.getItem(key)
    if (!data) return localStorage.setItem(key, JSON.stringify([stock]))
    const parsed = JSON.parse(data) as Stock[]
    const temp = [stock].concat(parsed)
    const newParsed = _.uniqBy(temp, 'id')
    localStorage.setItem(key, JSON.stringify(newParsed))
  },
  clear() {
    localStorage.removeItem(key)
  },
  delete(ticker: string) {
    const data = localStorage.getItem(key)
    if (!data) return null
    const parsed = JSON.parse(data) as Stock[]
    const newParsed = parsed.filter(
      (item, index) => item.cashTagName !== ticker
    )
    localStorage.setItem(key, JSON.stringify(newParsed))
  },
}

export default searchStorage
