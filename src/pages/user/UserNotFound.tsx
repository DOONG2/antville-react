import { Icon, MainText, Wrapper } from '../../lib/styles/empty'
import WatchListTabEmptyIcon from '../../static/svg/WatchListTabEmptyIcon'

export default function UserNotFound() {
  return (
    <>
      <Wrapper>
        <Icon>
          <WatchListTabEmptyIcon />
        </Icon>
        <MainText>유저를 찾을 수 없어요!</MainText>
      </Wrapper>
    </>
  )
}
