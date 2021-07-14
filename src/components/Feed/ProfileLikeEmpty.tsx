import styled from '@emotion/styled'
import React from 'react'
import ProfileLikeEmptyIcon from '../../assets/svg/ProfileLikeEmptyIcon'
import { Icon, MainText, SubText, Wrapper } from '../../mds/styled/empty'

export default function ProfileEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <ProfileLikeEmptyIcon />
        </Icon>
        <MainText>앤트빌이 당신의 활동을 기다려요!</MainText>
        <SubText>
          어떤 의견이든 좋아요!
          <br /> 당신의 생각을 자유롭게 펼쳐보세요 :)
        </SubText>
      </Wrapper>
    </>
  )
}
