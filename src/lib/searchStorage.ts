import _ from 'lodash'
import { SearchObject } from '../reducers/Slices/search'
import { Stock, User } from './api/types'

const key = 'SEARCH'

const searchStorage = {
  getHistoryStocks() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const { stocks } = JSON.parse(data) as SearchObject
      return stocks
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },
  getHistoryUsers() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const { users } = JSON.parse(data) as SearchObject
      return users
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },
  setHistoryUsers(user: User) {
    const data = localStorage.getItem(key)
    if (!data)
      return localStorage.setItem(
        key,
        JSON.stringify({ stocks: null, users: [user] })
      )
    const { stocks, users } = JSON.parse(data) as SearchObject
    if (!users)
      return localStorage.setItem(
        key,
        JSON.stringify({ users: [user], stocks })
      )
    const temp = [user].concat(users)
    const newParsed = _.uniqBy(temp, 'id')
    localStorage.setItem(key, JSON.stringify({ users: newParsed, stocks }))
  },
  setHistoryStocks(stock: Stock) {
    const data = localStorage.getItem(key)
    if (!data)
      return localStorage.setItem(
        key,
        JSON.stringify({ user: null, stocks: [stock] })
      )
    const { stocks, users } = JSON.parse(data) as SearchObject
    if (!stocks)
      return localStorage.setItem(
        key,
        JSON.stringify({ users, stocks: [stock] })
      )
    const temp = [stock].concat(stocks)
    const newParsed = _.uniqBy(temp, 'id')
    localStorage.setItem(key, JSON.stringify({ users, stocks: newParsed }))
  },
  clear() {
    localStorage.removeItem(key)
  },
  deleteStock(ticker: string) {
    const data = localStorage.getItem(key)
    if (!data) return null
    const { stocks, users } = JSON.parse(data) as SearchObject
    if (!stocks) return
    const newParsed = stocks.filter(
      (item, index) => item.cashTagName !== ticker
    )
    if (newParsed.length < 1)
      return localStorage.setItem(key, JSON.stringify({ users, stocks: null }))
    localStorage.setItem(key, JSON.stringify({ users, stocks: newParsed }))
  },
  deleteUser(nickname: string) {
    const data = localStorage.getItem(key)
    if (!data) return null
    const { users, stocks } = JSON.parse(data) as SearchObject
    if (!users) return
    const newParsed = users.filter((item, index) => item.nickname !== nickname)
    if (newParsed.length < 1)
      return localStorage.setItem(key, JSON.stringify({ users: null, stocks }))
    localStorage.setItem(key, JSON.stringify({ users: newParsed, stocks }))
  },
}

export default searchStorage
