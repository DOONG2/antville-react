import styled from '@emotion/styled'
import React from 'react'
import { useParams } from 'react-router-dom'
import CalendarIcon from '../../assets/svg/CalendarIcon'
import { antblue050, grey050, grey060, grey080 } from '../../mds/styled/colors'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import SideBar from '../SideBar'

const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserAvatar = styled.div`
  width: 133px;
  height: 133px;

  border-radius: 50%;
  background-color: ${grey060};
`

const UserInfo = styled.div`
  display: flex;
`

const UserDetail = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 26px;
`

const Nickname = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 19px;

  color: ${grey080};
`

const JoinDate = styled.div`
  margin-top: 18px;

  display: flex;
  align-items: center;
`

const FollowWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  margin-top: 10px;

  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${grey080};
`

const DateText = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${grey050};

  margin-left: 8px;
`

const Following = styled.div`
  display: flex;
`

const Follower = styled.div`
  display: flex;
`

const EditButton = styled.div`
  margin-top: 24px;
  padding: 4px 10px;

  background: #fafafa;

  border: 1px solid ${antblue050};
  border-radius: 3px;

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${antblue050};
`

const ButtonWrapper = styled.div``

export default function UserProfile() {
  const params = useParams()

  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <UserSection>
            <UserInfo>
              <UserAvatar></UserAvatar>
              <UserDetail>
                <Nickname>Kingeungi</Nickname>
                <JoinDate>
                  <CalendarIcon />
                  <DateText>2021년 3월에 가입</DateText>
                </JoinDate>
                <FollowWrapper>
                  <Following>{`10  팔로잉`}</Following>
                  <Follower>{`187  팔로워`}</Follower>
                </FollowWrapper>
              </UserDetail>
            </UserInfo>
            <ButtonWrapper>
              <EditButton>프로필 편집</EditButton>
            </ButtonWrapper>
          </UserSection>
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}
