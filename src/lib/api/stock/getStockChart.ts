import { UTCTimestamp } from 'lightweight-charts'
import client from '../client'
import { LightWeightChartData, StockChartData, StockChartType } from './types'

const getStockChart = async (type: StockChartType, symbol: string) => {
  const response = await client.post<StockChartData[] | null>(
    `/chart?type=${type}`,
    {
      symbol,
    }
  )
  return response.data
    ?.map<LightWeightChartData>((v, _, __) => {
      v.time = new Date(v.date!).getTime() as UTCTimestamp
      v.value = v.volume
      delete v.date
      delete v.volume
      return v as LightWeightChartData
    })
    .reverse()
}

export default getStockChart
