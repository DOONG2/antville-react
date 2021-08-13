import styled from '@emotion/styled'
import { Stock } from '../../lib/api/types'
import { selectAVStock } from '../../selectors/stockSelectors'
import { useRootState } from '../common/hooks/useRootState'
import { SignIcon } from './SignIcon'

interface StockListGroupProps {
  stock: Stock
}

export function PopularStockGroup({ stock }: StockListGroupProps) {
  const avStock = useRootState((state) => selectAVStock(state, stock))

  return (
    <Item>
      <TickerLabel>{avStock.title}</TickerLabel>
      {avStock.hasPrice && (
        <>
          <UpDownIconWrapper>
            <SignIcon sign={avStock.sign} />
          </UpDownIconWrapper>
          <RateLabel color={avStock.textColor}>
            {avStock.changePercent}%
          </RateLabel>
        </>
      )}
    </Item>
  )
}

const Item = styled.div`
  margin-left: 3.1rem;
  display: flex;
  align-items: center;
`

const TickerLabel = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #202020;
`

const UpDownIconWrapper = styled.div`
  margin-left: 1.1rem;
  display: flex;
  align-items: center;
`

const RateLabel = styled.div<{ color: string }>`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 0.6rem;
  color: ${(props) => props.color};
`
