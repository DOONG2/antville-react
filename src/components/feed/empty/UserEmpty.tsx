import ProfileEmptyIcon from '../../../static/svg/ProfileEmptyIcon'
import { Icon, MainText, Wrapper } from '../../../lib/styles/empty'

export default function ProfileEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <ProfileEmptyIcon />
        </Icon>
        <MainText>아직 활동한 내역이 없어요!</MainText>
      </Wrapper>
    </>
  )
}
