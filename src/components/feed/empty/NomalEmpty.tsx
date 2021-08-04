import ProfileEmptyIcon from '../../../static/svg/ProfileEmptyIcon'
import { Icon, MainText, SubText, Wrapper } from '../../../lib/styles/empty'

export default function NomalEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <ProfileEmptyIcon />
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
