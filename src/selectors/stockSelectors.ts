import { createDraftSafeSelector } from '@reduxjs/toolkit'
import { Stock } from '../lib/api/types'
import AVStock from '../lib/models/av_stock'
import { RootState } from '../store'

export const selectAVStock = createDraftSafeSelector(
  (state: RootState, stock: Stock) => state.stock.priceState[stock.symbol],
  (_: RootState, stock: Stock) => stock,
  (stockPrice, stock) => new AVStock(stock, stockPrice)
)

export const selectIsWatchlist = createDraftSafeSelector(
  (state: RootState) => state.stock.watchlist,
  (_: RootState, title: string) => title,
  (watchlist, title) =>
    watchlist?.some((w) => w.symbol === title || w.cashTagName === title) ??
    false
)

export const selectWatchlist = createDraftSafeSelector(
  (state: RootState) => state.stock.watchlist,
  (stocks) => stocks
)

export const selectPopularList = createDraftSafeSelector(
  (state: RootState) => state.stock.popularList,
  (stocks) => stocks
)
