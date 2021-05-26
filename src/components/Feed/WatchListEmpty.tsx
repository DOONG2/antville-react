import styled from '@emotion/styled'
import React from 'react'
import FollowingTabEmptyIcon from '../../assets/svg/FollowingTabEmptyIcon'
import { grey040 } from '../../mds/styled/colors'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Icon = styled.div`
  margin-top: 92px;
`

const Text = styled.div`
  font-family: Roboto;
  font-size: 24px;
  line-height: 150%;

  color: ${grey040};

  margin-top: 47px;
`

const SubText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 180%;

  text-align: center;

  color: ${grey040};

  margin-top: 24px;
`

export default function WatchListEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <FollowingTabEmptyIcon />
        </Icon>
        <Text>아직 관심종목이 없어요.</Text>
        <SubText>
          관심있는 종목을 추가하고,
          <br /> 앤트빌에서 실시간 정보를 공유해 보세요!
        </SubText>
      </Wrapper>
    </>
  )
}
