import styled from '@emotion/styled'
import React from 'react'
import HeartIcon from '../../assets/svg/HeartIcon'
import StockUpIcon from '../../assets/svg/StockUpIcon'
import TalkIcon from '../../assets/svg/TalkIcon'
import ThreeDot from '../../assets/svg/ThreeDot'
import { blue040, grey060, grey080 } from '../../mds/styled/colors'

const FeedWrapper = styled.div``

const TopWrapper = styled.div`
  padding: 13px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #ececec;
`

const FeedAvatar = styled.div`
  width: 50px;
  height: 50px;

  background-color: ${blue040};

  border-radius: 50px;
`

const NickNameWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};

  margin-left: 20px;
  padding-bottom: 5px;
`

const PostTime = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: ${grey060};

  margin-left: 7px;
`

const IconWrapper = styled.div`
  margin-left: 9px;
  display: flex;
  align-items: center;
`

const LeftItem = styled.div`
  display: flex;
  align-items: center;
`

const RightItem = styled.div``

const MiddleWrapper = styled.div`
  padding-left: 97px;
  padding-right: 22px;

  font-size: 16px;
  line-height: 150%;
`
const BottomWrapper = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  padding-left: 97px;
  column-gap: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  color: #757575;
`

const BottomItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`

const Count = styled.div``

const FeedSection = () => {
  return (
    <>
      <FeedWrapper>
        <TopWrapper>
          <LeftItem>
            <FeedAvatar></FeedAvatar>
            <NickNameWrapper>Tony_Gony</NickNameWrapper>
            <PostTime>3분 전</PostTime>
            <IconWrapper>
              <StockUpIcon />
            </IconWrapper>
          </LeftItem>
          <RightItem>
            <ThreeDot />
          </RightItem>
        </TopWrapper>
        <MiddleWrapper>
          $비트코인 여러분 버블은 곧 꺼집니다. 오늘 밤에 있었던 FOMC 금리 동결은
          당장은 호재처럼 보일지 모르지만 호재 소멸로 인해 단기적인 반등 이후,
          폭락을 보일 것입니다. 여러분 제가 누굽니까? 최정오입니다. 제 말 듣고
          손해 보신 적 있으십니까? 다시 한번 말씀드리지만 저는 최정오입니다
          여러분.. 저는 최근 $RBLX 와 $CPNG 주가 예측도 정확하게 예지해내는
          모습을 보여드렸습니다. 그러니 달리 팀원들처럼 저만 믿고 따라오십쇼!
          수익률의 단 40프로만 제게 제공해주시면 이 세상 모든 돈을 다
          안겨드리겠습니다!
        </MiddleWrapper>
        <BottomWrapper>
          <BottomItem>
            <HeartIcon />
            <Count>30</Count>
          </BottomItem>
          <BottomItem>
            <TalkIcon />
            <Count>5</Count>
          </BottomItem>
        </BottomWrapper>
      </FeedWrapper>
    </>
  )
}

export default FeedSection
