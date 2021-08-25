import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { Stock } from '../lib/api/types'
import AVStock from '../lib/models/av_stock'
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

export const selectIsWatchlist = createDraftSafeSelector(
  (state: RootState) => state.stock.watchlist,
  (_: RootState, title: string) => title,
  (watchlist, title) => {
    const isWatchlist =
      watchlist?.some((w) => w.symbol === title || w.cashTagName === title) ??
      false
    return isWatchlist
  }
)

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
