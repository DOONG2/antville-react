import styled from '@emotion/styled'
import BlueStarIcon from '../../static/svg/BlueStarIcon'
import { antblue050, grey080 } from '../../lib/styles/colors'
import AuthComponent from '../common/AuthComponent'
import AVStock from '../../lib/models/av_stock'
import { useStockInfo } from './hooks/useStockInfo'

type Props = {
  avStock: AVStock
}

export default function AddWatchlistComponent({ avStock }: Props) {
  const { isWatchlist, watchUserCount, clickAddWatchlistButton } =
    useStockInfo(avStock)

  return (
    <>
      <WatchWrapper>
        <BlueStarIcon />
        <WatchListCount>{watchUserCount}</WatchListCount>
      </WatchWrapper>
      <AuthComponent callback={clickAddWatchlistButton}>
        <WatchButton isWatching={isWatchlist}>
          {isWatchlist ? '관심 종목 삭제' : '관심 종목 등록'}
        </WatchButton>
      </AuthComponent>
    </>
  )
}

const WatchButton = styled.div<{ isWatching: boolean }>`
  padding: 6px 9px;
  background-color: ${(props) => (props.isWatching ? '#fffff' : antblue050)};

  font-size: 11px;
  border-radius: 3px;
  border: 1px solid ${antblue050};
  color: ${(props) => (props.isWatching ? antblue050 : '#ededed')};
  margin-top: 3px;

  cursor: pointer;
`

const WatchListCount = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  text-align: center;
  margin-left: 3px;

  color: ${grey080};
`

const WatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
