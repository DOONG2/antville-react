import styled from '@emotion/styled'
import { StockType } from '../../api/types'
import PolygonDown from '../../assets/svg/PolygonDown'
import PolygonUp from '../../assets/svg/PolygonUp'
import { grey070, grey080, red050 } from '../../mds/styled/colors'
import AddWatchlistComponent from './AddWatchlistComponent'

type Props = {
  stock: StockType
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div`
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;

  color: ${grey080};
`

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 3px;
`

const Ticker = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;

  color: ${grey080};
`

const Price = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-left: 5px;

  color: ${grey080};
`

const Rate = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: ${red050};
  margin-left: 4px;
`

const IconWrapper = styled.div`
  margin-left: 10px;
`

const LastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Top = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: ${grey070};
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
`

export default function StockInfo({ stock }: Props) {
  return (
    <Wrapper>
      <Inner>
        <TopWrapper>{stock.stock.enName}</TopWrapper>
        <TitleWrapper>
          <Ticker>{stock.stock.cashTagName}</Ticker>
          <Price>＄83.15</Price>
          <LastItem>
            <Top>66,089,152</Top>
            <Bottom>
              <IconWrapper>
                {true ? <PolygonUp /> : <PolygonDown />}
              </IconWrapper>
              <Rate>0.41 (0.48%)</Rate>
            </Bottom>
          </LastItem>
        </TitleWrapper>
      </Inner>
      <Inner>
        <AddWatchlistComponent stock={stock} isWatching={false} />
      </Inner>
    </Wrapper>
  )
}
