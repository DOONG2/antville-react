import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { Stock } from '../../lib/api/types'
import { sky010 } from '../../lib/styles/colors'
import {
  CompanyName,
  StockListGroup,
  StockListItem,
  StockName,
  StockPrice,
  UpDownRate,
} from '../../lib/styles/stockList'
import { useRootState } from '../common/hooks/useRootState'
import { selectAVStock } from '../../selectors/stockSelectors'
import { SignIcon } from './SignIcon'

interface StockListGroupProps {
  stock: Stock
}

export function WatchListStockGroup({ stock }: StockListGroupProps) {
  const history = useHistory()
  const avStock = useRootState((state) => selectAVStock(state, stock))
  return (
    <NewStockListGroup
      onClick={() => history.push(`/stock/${avStock.stock.cashTagName}`)}
    >
      <StockListItem>
        <StockName>{avStock.title}</StockName>
        {avStock.hasPrice && <StockPrice>{avStock.latest}</StockPrice>}
      </StockListItem>
      <StockListItem>
        <CompanyName>{avStock.description}</CompanyName>
        {avStock.hasPrice && (
          <UpDownRate>
            <SignIcon sign={avStock.sign} isSmall={true} />
            <RateLabel color={avStock.textColor}>
              {avStock.change} ({avStock.changePercent}%)
            </RateLabel>
          </UpDownRate>
        )}
      </StockListItem>
    </NewStockListGroup>
  )
}

const NewStockListGroup = styled(StockListGroup)`
  cursor: pointer;
  :hover {
    background-color: ${sky010};
  }
`

const RateLabel = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`
