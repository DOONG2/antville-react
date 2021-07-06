import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import deleteWatchlist from '../../api/stock/deleteWatchlist'
import putAddWatchlist from '../../api/stock/putAddWatchlist'
import { antblue050 } from '../../mds/styled/colors'

type Props = {
  id: number
  isWatching: boolean
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

export default function WatchlistButton({
  id,
  isWatching: intialState,
}: Props) {
  const [isWatching, setIsWatching] = useState(intialState)

  useEffect(() => {
    setIsWatching(intialState)
  }, [intialState])

  return (
    <>
      <WatchButton
        isWatching={isWatching}
        onClick={() => {
          if (isWatching) {
            deleteWatchlist(id)
          } else {
            putAddWatchlist(id)
          }
          setIsWatching(!isWatching)
        }}
      >
        {isWatching ? '관심 종목 삭제' : '관심 종목 등록'}
      </WatchButton>
    </>
  )
}
