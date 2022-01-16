import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { Stock } from 'src/api/types'
import AVStock from 'src/models/av_stock'
import { RootState } from '../store'

export const selectAvStock = () => {
  // 렌더링 최적화를 위한 상태 분리 선택기
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
  // DraftSafeSelector를 통한 논캐싱 배열 내부 값 트레킹
  (state: RootState) => state.stock.watchlist,
  (state: RootState) => state.stock.popularList,
  (watchlist, popularList) => {
    const symbolList = Array.from(
      new Set([...(watchlist ?? []), ...(popularList ?? [])])
    ).map((s) => s.symbol)
    return symbolList
  }
)
