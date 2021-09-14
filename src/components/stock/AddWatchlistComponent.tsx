import styled from '@emotion/styled'
import { antblue050 } from '../../lib/styles/colors'
import AuthComponent from '../common/AuthComponent'
import AVStock from '../../lib/models/av_stock'
import { useStockInfo } from './hooks/useStockInfo'
import WatchlistLimitAlert from './WatchlistLimitAlert'
import Alert from '../common/Alert'
import PlusIcon from '../../static/svg/PlusIcon'

type Props = {
  avStock: AVStock
}

export default function AddWatchlistComponent({ avStock }: Props) {
  const {
    isWatchlist,
    clickAddWatchlistButton,
    isWatchlistLimit,
    setIsWatchlistLimit,
  } = useStockInfo({ avStock })

  return (
    <>
      <Wrapper>
        <AuthComponent callback={clickAddWatchlistButton}>
          <WatchButton isWatching={isWatchlist}>
            {isWatchlist ? (
              <>
                <Line />
                관심 종목 삭제
              </>
            ) : (
              <>
                <PlusIcon />
                관심 종목 추가
              </>
            )}
          </WatchButton>
        </AuthComponent>
      </Wrapper>
      {isWatchlistLimit && (
        <Alert close={() => setIsWatchlistLimit(false)}>
          <WatchlistLimitAlert />
        </Alert>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding-top: 6px;
`

const WatchButton = styled.div<{ isWatching: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 8px 11px;
  background-color: ${(props) => (props.isWatching ? '#fffff' : antblue050)};

  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  border-radius: 5px;
  border: 1px solid ${antblue050};
  color: ${(props) => (props.isWatching ? antblue050 : '#ededed')};
  white-space: nowrap;
  cursor: pointer;
`

const Line = styled.div`
  width: 10px;
  height: 0px;
  border: 1px solid ${antblue050};
`
