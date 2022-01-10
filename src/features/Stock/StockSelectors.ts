import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { Stock } from 'src/api/types'
import AVStock from 'src/models/av_stock'
import { RootState } from '../store'

export const selectAvStock = () => {
  const avStockSelector = createSelector(
    (state: RootState, stock: Stock) => state.stock.priceState[stock.symbol],
    (_: RootState, stock: Stock) => stock,
    (stockPrice, stock) => {
      const avStock = new AVStock(stock, stockPrice)
      return avStock
    }
  )
  return avStockSelector
}

export const selectAllPriceSymbolList = createDraftSafeSelector(
  (state: RootState) => state.stock.watchlist,
  (state: RootState) => state.stock.popularList,
  (watchlist, popularList) => {
    const symbolList = Array.from(
      new Set([...(watchlist ?? []), ...(popularList ?? [])])
    ).map((s) => s.symbol)
    return symbolList
  }
)
