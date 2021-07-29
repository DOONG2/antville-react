import { Icon, MainText, Wrapper } from '../../lib/styles/empty'
import WatchListTabEmptyIcon from '../../static/svg/WatchListTabEmptyIcon'

export default function StockNotFound() {
  return (
    <>
      <Wrapper>
        <Icon>
          <WatchListTabEmptyIcon />
        </Icon>
        <MainText>종목을 찾을 수 없어요!</MainText>
      </Wrapper>
    </>
  )
}
