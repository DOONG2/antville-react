import styled from '@emotion/styled'
import {
  createChart,
  CrosshairMode,
  IChartApi,
  ISeriesApi,
  TickMarkType,
  UTCTimestamp,
} from 'lightweight-charts'
import NumberFormatUtil from '../../../lib/utils/number_format'
import { useEffect, useRef, useState } from 'react'
import { chartTypeToString, StockChartType } from '../../../lib/api/stock/types'
import {
  blue050,
  grey020,
  grey030,
  grey050,
  red050,
} from '../../../lib/styles/colors'
import Loading from '../../common/Loading'
import { useStockChart } from '../hooks/useStockChart'

type Props = {
  symbol: string
}

const chartTypes = [
  StockChartType.DAY,
  StockChartType.WEEK,
  StockChartType.MONTH,
  StockChartType.THREE_MONTH,
  StockChartType.SIX_MONTH,
  StockChartType.YEAR,
]

export default function StockChart({ symbol }: Props) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chart = useRef<IChartApi>()
  const [volumeSeries, setVolumeSeries] =
    useState<ISeriesApi<'Histogram'> | null>(null)
  const [candleSeries, setCandleSeries] =
    useState<ISeriesApi<'Candlestick'> | null>(null)
  const { type, setType, isLoading, data } = useStockChart({ symbol })

  useEffect(() => {
    if (!chart.current) {
      chart.current = createChart(chartContainerRef.current!, {
        width: chartContainerRef.current!.clientWidth,
        height: chartContainerRef.current!.clientHeight,
        localization: {
          timeFormatter: (time: UTCTimestamp) => {
            return NumberFormatUtil.fullTimeFormat(time)
          },
        },
        layout: {
          backgroundColor: '#ffffff',
          textColor: grey050,
        },
        grid: {
          vertLines: {
            color: grey020,
          },
          horzLines: {
            color: grey020,
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: grey020,
        },
        timeScale: {
          borderColor: grey020,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (chart.current && candleSeries && volumeSeries) {
      chart.current.removeSeries(candleSeries)
      chart.current.removeSeries(volumeSeries)
      setVolumeSeries(null)
      setCandleSeries(null)
    }
    if (data && chart.current) {
      const vSeries = chart.current.addHistogramSeries({
        color: grey030,
        priceScaleId: 'left',
        priceLineVisible: false,
        priceFormat: {
          type: 'volume',
        },
      })
      const cSeries = chart.current.addCandlestickSeries({
        upColor: red050,
        downColor: blue050,
        borderDownColor: blue050,
        borderUpColor: red050,
        wickDownColor: '#838ca1',
        wickUpColor: '#838ca1',
      })
      setVolumeSeries(vSeries)
      setCandleSeries(cSeries)
      vSeries.priceScale().applyOptions({
        scaleMargins: {
          top: 0.7,
          bottom: 0,
        },
      })
      chart.current.timeScale().applyOptions({
        timeVisible: true,
        secondsVisible: false,
        tickMarkFormatter: (
          time: UTCTimestamp,
          _: TickMarkType,
          __: string
        ) => {
          if (type === StockChartType.DAY) {
            return NumberFormatUtil.timeFormat(time)
          } else {
            return NumberFormatUtil.monthFormat(time)
          }
        },
      })
      vSeries.setData(data)
      cSeries.setData(data)
      chart.current.timeScale().fitContent()
    }
  }, [data])

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading && <Loading width={60} />}
        <div
          ref={chartContainerRef}
          style={{
            width: '100%',
            height: '250px',
            marginBottom: '20px',
            position: 'absolute',
          }}
        />
      </div>
      <TypeWrapper>
        {chartTypes.map((t) => (
          <TypeItem key={t} isSelected={type === t} onClick={() => setType(t)}>
            {chartTypeToString(t)}
          </TypeItem>
        ))}
      </TypeWrapper>
    </div>
  )
}

export const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 21px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
`

export const TypeItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding-bottom: 13px;
  color: ${(props) => (props.isSelected ? '#000000' : grey030)};
  cursor: pointer;
`
