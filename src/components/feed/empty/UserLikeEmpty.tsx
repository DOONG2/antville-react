import ProfileLikeEmptyIcon from '../../../static/svg/ProfileLikeEmptyIcon'
import { Icon, MainText, Wrapper } from '../../../lib/styles/empty'

export default function ProfileEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <ProfileLikeEmptyIcon />
        </Icon>
        <MainText>아직 좋아요를 누른 게시글이 없어요!</MainText>
      </Wrapper>
    </>
  )
}
