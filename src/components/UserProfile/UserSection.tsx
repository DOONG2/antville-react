import styled from '@emotion/styled'
import CalendarIcon from '../../assets/svg/CalendarIcon'
import { antblue050, grey050, grey060, grey080 } from '../../mds/styled/colors'

const Wrapper = styled.div`
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

const Introduction = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: ${grey080};
  margin-top: 15px;
`

export default function UserSection() {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <Introduction>
        주식경제 유튜브. (전) 한국투자밸류자산운용 펀드매니저 소셜 경제 미디어
        스넥(SNEK)에서 콘텐츠를 담당하고 있습니다. 경제와 관련된 주제에 대해
        나누고 싶은 이야기 거리가 있으신 분들의 기고자 신청을 스넥은 늘
        환영합니다. (소정의 기고료도 준비되어 있으니 망설이지 말아주세요^^) 지금
        투자중인 상품에 대해서 혹시 이야기를 나누고 싶다면 좋아요 버튼
        눌러주시고 실시간 트윗으로 대화나눠요
      </Introduction>
    </>
  )
}
