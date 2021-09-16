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
  grey060,
  grey080,
  red050,
} from '../../../lib/styles/colors'
import Loading from '../../common/Loading'
import { useStockChart } from '../hooks/useStockChart'
import media from '../../../lib/styles/media'

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
  const resizeObserver = useRef<ResizeObserver>()
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

    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      chart?.current?.applyOptions({ width, height })
      setTimeout(() => {
        chart?.current?.timeScale().fitContent()
      }, 0)
    })

    if (chartContainerRef.current) {
      resizeObserver.current.observe(chartContainerRef.current)
    }

    return () => resizeObserver?.current?.disconnect()
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
    <Wrapper>
      <InnerWrapper>
        {isLoading && <Loading width={60} />}
        <ChartWrapper ref={chartContainerRef} />
      </InnerWrapper>
      <TypeWrapper>
        {chartTypes.map((t) => (
          <TypeItem key={t} isSelected={type === t} onClick={() => setType(t)}>
            {chartTypeToString(t)}
          </TypeItem>
        ))}
      </TypeWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  ${media.medium} {
    padding-bottom: 1rem;
  }
`

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.medium} {
    height: calc(100vw * 0.4);
  }
`

const ChartWrapper = styled.div`
  width: 100%;
  height: 25.5rem;
  ${media.medium} {
    height: calc(100vw * 0.4);
  }
`

export const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  margin-top: 1.2rem;
  color: ${grey060};
  ${media.medium} {
    justify-content: center;
    font-size: 1rem;
  }
`

export const TypeItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;

  border-radius: 63px;
  background: ${(p) => (p.isSelected ? grey020 : '#fff')};
  font-weight: ${(p) => (p.isSelected ? 700 : 500)};

  color: ${(props) => (props.isSelected ? grey080 : grey060)};
  cursor: pointer;
`
