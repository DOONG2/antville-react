import styled from '@emotion/styled'
import React from 'react'
import WatchListTabEmptyIcon from '../../assets/svg/WatchListTabEmptyIcon'
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

export default function FollowingEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <WatchListTabEmptyIcon />
        </Icon>
        <Text>아직 팔로우 한 주민이 없어요.</Text>
        <SubText>
          맘에드는 주민을 팔로우하고,
          <br />
          앤트빌 주민들의 투자 비법과 정보를 공유 받아보세요!
        </SubText>
      </Wrapper>
    </>
  )
}
