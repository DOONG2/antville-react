import styled from '@emotion/styled'
import React from 'react'
import PolygonUp from '../../assets/svg/PolygonUp'
import { red010, red050 } from '../../mds/styled/colors'

const PaddingWrapper = styled.div`
  padding: 0 22px;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 21px;
  background-color: ${red010};
  border-radius: 8px;

  display: flex;
`

const VerticleLine = styled.div`
  width: 3px;
  background-color: ${red050};
  border-radius: 8px;
`

const InnerWrapper = styled.div`
  width: 100%;
  margin-left: 13px;
  display: flex;
  justify-content: space-between;
`

const LeftItem = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
  display: grid;
`

const RightItem = styled.div`
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;

  text-align: right;

  color: #646464;
  display: grid;
`

const StockPriceText = styled.div`
  display: flex;
  align-items: center;
  color: ${red050};

  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin-top: 7px;
`

const MarginWrapper = styled.div`
  margin-left: 4.6px;
`

const PrePrice = styled.div``

const NowPrice = styled.div`
  margin-top: 6px;
`

export default function FeedHistoryComponent() {
  return (
    <PaddingWrapper>
      <Wrapper>
        <VerticleLine />
        <InnerWrapper>
          <LeftItem>
            <div>비트코인</div>
            <StockPriceText>
              <PolygonUp />
              <MarginWrapper>13,939,400 (+3.04%) </MarginWrapper>
            </StockPriceText>
          </LeftItem>
          <RightItem>
            <PrePrice>그때는 42,403,000</PrePrice>
            <NowPrice>지금은 56,342,400</NowPrice>
          </RightItem>
        </InnerWrapper>
      </Wrapper>
    </PaddingWrapper>
  )
}
