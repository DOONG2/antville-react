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
