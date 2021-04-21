export interface StockPopularType {
  stocks: Stock[]
  stockPriceInfos: StockPriceInfo[]
}

export interface StockPriceInfo {
  symbol: string
  latest: number
  dayHigh: number
  dayLow: number
  open: number
  previousClose: number
  volume: number
  timestamp: string
}

export interface Stock {
  id: number
  symbol: string
  enName: string
  krName: string
  type: string
  stockCount: StockCount
}

export interface StockCount {
  watchUserCount: number
}

export type User = {
  id: number
  email: string
  username: string
  display_name: string
  photo_url: string | null
  created_at: string
  is_certified: boolean
}

export type UserSerialized = Omit<User, 'email' | 'created_at' | 'is_certified'>
