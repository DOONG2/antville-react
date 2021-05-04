import styled from '@emotion/styled'
import React from 'react'
import Polygon from '../../assets/svg/Polygon'
import PolygonDown from '../../assets/svg/PolygonDown'
import PolygonUp from '../../assets/svg/PolygonUp'
import useStockPopularQuery from '../../hooks/query/useStockPopularQuery'

const Wrapper = styled.div`
  min-width: 144rem;
  border-bottom: 0.5px solid #e0e0e0;
`

const BarWrapper = styled.div`
  display: flex;
  width: 144rem;
  padding: 0 2.4rem;
  height: 5.6rem;
  margin: 0 auto;
  align-items: center;
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

const StockBar = () => {
  const { isLoading, data } = useStockPopularQuery()
<<<<<<< HEAD
  console.log(data)
=======
>>>>>>> 0dc624a5f4446230b206e94337d7cfcbc7d679c0

  return (
    <Wrapper>
      <BarWrapper>
        <Label>실시간 인기 종목</Label>
        <Polygon />
<<<<<<< HEAD
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
=======
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
>>>>>>> 0dc624a5f4446230b206e94337d7cfcbc7d679c0
      </BarWrapper>
    </Wrapper>
  )
}

export default StockBar
