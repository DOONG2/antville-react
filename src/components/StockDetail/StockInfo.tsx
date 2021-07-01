import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import BlueStarIcon from '../../assets/svg/BlueStarIcon'
import PolygonDown from '../../assets/svg/PolygonDown'
import PolygonUp from '../../assets/svg/PolygonUp'
import { antblue050, grey070, grey080, red050 } from '../../mds/styled/colors'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const WatchListCount = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  text-align: center;
  margin-left: 3px;

  color: ${grey080};
`

const WatchButton = styled.div`
  padding: 6px 9px;
  background-color: ${antblue050};

  font-size: 11px;
  border-radius: 3px;
  color: #ededed;
  margin-top: 3px;

  cursor: pointer;
`

const WatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function StockInfo() {
  const { id } = useParams<{ id: string }>()
  return (
    <Wrapper>
      <Inner>
        <TopWrapper>Advanced Micro Devices, Inc.</TopWrapper>
        <TitleWrapper>
          <Ticker>AMD</Ticker>
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
        <WatchWrapper>
          <BlueStarIcon />
          <WatchListCount>61,367</WatchListCount>
        </WatchWrapper>
        <WatchButton>관심 종목 등록</WatchButton>
      </Inner>
    </Wrapper>
  )
}
