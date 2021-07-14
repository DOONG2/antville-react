import styled from '@emotion/styled'
import React from 'react'
import FollowingTabEmptyIcon from '../../assets/svg/FollowingTabEmptyIcon'
import { Icon, MainText, SubText, Wrapper } from '../../mds/styled/empty'

export default function WatchListEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <FollowingTabEmptyIcon />
        </Icon>
        <MainText>아직 관심종목이 없어요.</MainText>
        <SubText>
          관심있는 종목을 추가하고,
          <br /> 앤트빌에서 실시간 정보를 공유해 보세요!
        </SubText>
      </Wrapper>
    </>
  )
}
