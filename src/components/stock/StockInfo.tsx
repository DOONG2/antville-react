import styled from '@emotion/styled'
import { grey060, grey080 } from '../../lib/styles/colors'
import { SignIcon } from './SignIcon'
import AddWatchlistComponent from './AddWatchlistComponent'
import { Stock } from '../../lib/api/types'
import { useMemo } from 'react'
import { selectAvStock } from '../../selectors/stockSelectors'
import { useRootState } from '../common/hooks/useRootState'
import media from '../../lib/styles/media'

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
  ${media.medium} {
    padding: 1.5rem 1.8rem 0 1.8rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div`
  font-size: 1.4rem;
  color: ${grey060};
`

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 0.6rem;
  align-items: baseline;
`

const Ticker = styled.div`
  font-weight: bold;
  font-size: 4rem;
  ${media.medium} {
    font-size: 1.8rem;
  }

  color: #202020;
`

const Price = styled.div`
  font-weight: 500;
  font-size: 3.8rem;

  margin-left: 1rem;
  ${media.medium} {
    font-size: 3.2rem;
  }

  color: ${grey080};
`

const Rate = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  font-weight: 500;

  ${media.medium} {
    font-size: 1.3rem;
  }
  color: ${(props) => props.color};
  margin-left: 0.54rem;
`

const IconWrapper = styled.div`
  margin-left: 1rem;
`

const LastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`
