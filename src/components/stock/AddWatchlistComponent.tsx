import styled from '@emotion/styled'
import PeopleIcon from '../../static/svg/PeopleIcon'
import { antblue050, grey080 } from '../../lib/styles/colors'
import AuthComponent from '../common/AuthComponent'
import AVStock from '../../lib/models/av_stock'
import { useStockInfo } from './hooks/useStockInfo'

type Props = {
  avStock: AVStock
}

export default function AddWatchlistComponent({ avStock }: Props) {
  const { isWatchlist, watchUserCount, clickAddWatchlistButton } = useStockInfo(
    { avStock }
  )

  return (
    <Wrapper>
      <WatchWrapper>
        <PeopleIcon />
        <WatchListCount>{watchUserCount.toLocaleString()}</WatchListCount>
      </WatchWrapper>
      <AuthComponent callback={clickAddWatchlistButton}>
        <WatchButton isWatching={isWatchlist}>
          {isWatchlist ? '관심 종목 삭제' : '관심 종목 등록'}
        </WatchButton>
      </AuthComponent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WatchButton = styled.div<{ isWatching: boolean }>`
  padding: 9px;
  background-color: ${(props) => (props.isWatching ? '#fffff' : antblue050)};

  font-size: 11px;
  border-radius: 3px;
  border: 1px solid ${antblue050};
  color: ${(props) => (props.isWatching ? antblue050 : '#ededed')};
  margin-top: 3px;

  cursor: pointer;
`

const WatchListCount = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: ${grey080};
`

const WatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 6px;
`
