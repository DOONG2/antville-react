import { Icon, MainText, Wrapper } from '../../lib/styles/empty'
import ProfileEmptyIcon from '../../static/svg/ProfileEmptyIcon'

export default function FeedDetailNotFound() {
  return (
    <>
      <Wrapper>
        <Icon>
          <ProfileEmptyIcon />
        </Icon>
        <MainText>게시글을 찾을 수 없어요!</MainText>
      </Wrapper>
    </>
  )
}
