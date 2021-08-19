import { StockChartType } from './../../../lib/api/stock/types'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import getStockChart from '../../../lib/api/stock/getStockChart'

type Props = {
  symbol: string
}

export function useStockChart({ symbol }: Props) {
  const [type, setType] = useState<StockChartType>(StockChartType.DAY)
  const { isLoading, data, error } = useQuery(
    ['stockChart', type, symbol],
    () => getStockChart(type, symbol),
    { staleTime: 1000 * 5 * 60 }
  )

  useEffect(() => {
    setType(StockChartType.DAY)
  }, [symbol])

  return { type, setType, isLoading, data, error }
}
