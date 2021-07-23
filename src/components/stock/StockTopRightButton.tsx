import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import deleteWatchlist from '../../lib/api/stock/deleteWatchlist'
import putAddWatchlist from '../../lib/api/stock/putAddWatchlist'
import { StockType } from '../../lib/api/types'
import BlueStarIcon from '../../static/svg/BlueStarIcon'
import { antblue050, grey080 } from '../../lib/styles/colors'
import watchlistSlice from '../../reducers/Slices/watchlist'
import { useDispatch } from 'react-redux'

type Props = {
  stock: StockType
  isWatching: boolean
}

export default function AddWatchlistComponent({
  stock,
  isWatching: intialState,
}: Props) {
  const [isWatching, setIsWatching] = useState(intialState)
  const [watchUserCount, setWatchUserCount] = useState(
    stock.stock.stockCount.watchUserCount
  )
  const { setAddWatchlist, setDeleteWatchlist } = watchlistSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    setIsWatching(intialState)
  }, [intialState])

  return (
    <>
      <WatchWrapper>
        <BlueStarIcon />
        <WatchListCount>{watchUserCount}</WatchListCount>
      </WatchWrapper>
      <WatchButton
        isWatching={isWatching}
        onClick={() => {
          if (isWatching) {
            deleteWatchlist(stock.stock.id)
            setWatchUserCount(watchUserCount - 1)
            dispatch(setDeleteWatchlist(stock.stock))
          } else {
            putAddWatchlist(stock.stock.id)
            setWatchUserCount(watchUserCount + 1)
            dispatch(setAddWatchlist(stock.stock))
          }
          setIsWatching(!isWatching)
        }}
      >
        {isWatching ? '관심 종목 삭제' : '관심 종목 등록'}
      </WatchButton>
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
