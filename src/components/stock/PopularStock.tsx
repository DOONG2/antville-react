import styled from '@emotion/styled'
import React from 'react'
import Polygon from '../../static/svg/Polygon'
import PolygonDown from '../../static/svg/PolygonDown'
import PolygonUp from '../../static/svg/PolygonUp'
import useStockPopularQuery from './hooks/useStockPopularQuery'

function PopularStock() {
  const { isLoading, data } = useStockPopularQuery()

  return (
    <Wrapper>
      <BarWrapper>
        <Label>실시간 인기 종목</Label>
        <Polygon />
        {isLoading ? (
          ''
        ) : (
          <Group>
            {data?.stocks.map((stock) => (
              <Item key={`${stock.id}-stock-bar`}>
                <TickerLabel>{stock.symbol}</TickerLabel>
                <UpDownIconWrapper>
                  {true ? <PolygonUp /> : <PolygonDown />}
                </UpDownIconWrapper>
                <RateLabel isUp={true}>3.17%</RateLabel>
              </Item>
            ))}
          </Group>
        )}
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 0.5px solid #e0e0e0;
`

const BarWrapper = styled.div`
  display: flex;
  width: 144rem;
  padding: 0 2.4rem;
  height: 5.6rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

const Label = styled.div`
  color: rgba(117, 117, 117, 1);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 22px;

  margin-right: 0.9rem;
`

const Group = styled.div`
  display: flex;
`

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
`

const RateLabel = styled.div<{ isUp: boolean }>`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 0.6rem;

  color: ${(props) => (props.isUp ? '#ff3f3e' : 'rgba(48, 130, 245, 1)')};
`

export default PopularStock