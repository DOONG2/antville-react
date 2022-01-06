import styled from '@emotion/styled'
import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { Stock } from 'src/api/types'
import { useRootState } from 'src/components/common/hooks/useRootState'
import { selectAvStock } from 'src/features/Stock/StockSelectors'

interface StockListGroupProps {
  stock: Stock
}

export function PopularStockGroup({ stock }: StockListGroupProps) {
  const history = useHistory()
  const memoizeSelectAvStock = useMemo(selectAvStock, [])
  const avStock = useRootState((state) => memoizeSelectAvStock(state, stock))

  return (
    <Item onClick={() => history.push(`/stock/${avStock.stock.cashTagName}`)}>
      <TickerLabel>{avStock.title}</TickerLabel>
      {avStock.hasPrice && (
        <>
          <RateLabel color={avStock.textColor}>
            {avStock.changePercent}%
          </RateLabel>
        </>
      )}
    </Item>
  )
}

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 15px;
`

const TickerLabel = styled.div`
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #202020;
`

const RateLabel = styled.div<{ color: string }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 6px;
  color: ${(props) => props.color};
`
