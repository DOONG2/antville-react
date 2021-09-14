import styled from '@emotion/styled'
import { grey060, grey080 } from '../../lib/styles/colors'
import { SignIcon } from './SignIcon'
import AddWatchlistComponent from './AddWatchlistComponent'
import { Stock } from '../../lib/api/types'
import { useMemo } from 'react'
import { selectAvStock } from '../../selectors/stockSelectors'
import { useRootState } from '../common/hooks/useRootState'

type Props = {
  stock: Stock
}

export default function StockInfo({ stock }: Props) {
  const memoizeSelectAvStock = useMemo(selectAvStock, [])
  const avStock = useRootState((state) => memoizeSelectAvStock(state, stock))
  return (
    <Wrapper>
      <Inner>
        <TopWrapper>{avStock.description}</TopWrapper>
        <TitleWrapper>
          <Ticker>{avStock.title}</Ticker>
          {avStock.hasPrice && (
            <>
              <Price>{avStock.latest}</Price>
              <LastItem>
                <Bottom>
                  <IconWrapper>
                    <SignIcon sign={avStock.sign} isChart={true} />
                  </IconWrapper>
                  <Rate color={avStock.textColor}>
                    {avStock.change} ({avStock.changePercent}%)
                  </Rate>
                </Bottom>
              </LastItem>
            </>
          )}
        </TitleWrapper>
      </Inner>
      <Inner>
        <AddWatchlistComponent avStock={avStock} />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div`
  font-size: 14px;
  line-height: 14px;

  color: ${grey060};
`

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 6px;
`

const Ticker = styled.div`
  font-weight: bold;
  font-size: 40px;
  line-height: 50.08px;

  color: #202020;
`

const Price = styled.div`
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  margin-left: 10px;

  color: ${grey080};
`

const Rate = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  color: ${(props) => props.color};
  margin-left: 5.4px;
`

const IconWrapper = styled.div`
  margin-left: 10px;
`

const LastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 6px;
`

// const Top = styled.div`
//
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 12px;

//   color: ${grey070};
// `

const Bottom = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`
