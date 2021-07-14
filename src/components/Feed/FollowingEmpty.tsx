import styled from '@emotion/styled'
import React from 'react'
import WatchListTabEmptyIcon from '../../assets/svg/WatchListTabEmptyIcon'
import { Icon, MainText, SubText, Wrapper } from '../../mds/styled/empty'

export default function FollowingEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <WatchListTabEmptyIcon />
        </Icon>
        <MainText>아직 팔로우 한 주민이 없어요.</MainText>
        <SubText>
          맘에드는 주민을 팔로우하고,
          <br />
          앤트빌 주민들의 투자 비법과 정보를 공유 받아보세요!
        </SubText>
      </Wrapper>
    </>
  )
}
