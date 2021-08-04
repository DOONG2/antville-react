import WatchListTabEmptyIcon from '../../../static/svg/WatchListTabEmptyIcon'
import { Icon, MainText, SubText, Wrapper } from '../../../lib/styles/empty'

export default function WatchListEmpty() {
  return (
    <>
      <Wrapper>
        <Icon>
          <WatchListTabEmptyIcon />
        </Icon>
        <MainText>아직 관심종목 게시글이 없어요.</MainText>
        <SubText>
          관심있는 종목을 추가하고,
          <br /> 앤트빌에서 실시간 정보를 공유해 보세요!
        </SubText>
      </Wrapper>
    </>
  )
}
