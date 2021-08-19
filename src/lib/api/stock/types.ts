import { UTCTimestamp } from 'lightweight-charts'
import { Stock, StockPriceInfo } from '../types'

export interface getStockPopularResponse {
  stocks: [Stock]
  stockPriceInfos: [StockPriceInfo]
}

export interface getWatchListResponse {
  stocks: [Stock]
  stockPriceInfos: [StockPriceInfo]
}

export interface StockChartData {
  date?: string
  open: number
  high: number
  low: number
  close: number
  volume?: number
  time?: UTCTimestamp
  value?: number
}

export interface LightWeightChartData {
  time: UTCTimestamp
  open: number
  high: number
  low: number
  close: number
  value: number
}

export enum StockChartType {
  DAY = '1d',
  WEEK = '1w',
  MONTH = '1m',
  THREE_MONTH = '3m',
  SIX_MONTH = '6m',
  YEAR = '1y',
}

export function chartTypeToString(type: StockChartType) {
  switch (type) {
    case StockChartType.DAY:
      return '1일'
    case StockChartType.WEEK:
      return '1주일'
    case StockChartType.MONTH:
      return '1개월'
    case StockChartType.THREE_MONTH:
      return '3개월'
    case StockChartType.SIX_MONTH:
      return '6개월'
    case StockChartType.YEAR:
      return '1년'

    default:
      throw Error('Unsupported Type')
  }
}
