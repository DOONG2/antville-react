import { Stock, StockPriceInfo } from '../../lib/api/types'

export interface getStockPopularResponse {
  stocks: [Stock]
  stockPriceInfos: [StockPriceInfo?]
}

export interface getWatchListResponse {
  stocks: [Stock]
  stockPriceInfos: [StockPriceInfo?]
}
