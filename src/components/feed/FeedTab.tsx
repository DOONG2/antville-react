import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import useGetRoutePath from './hooks/useGetPath'
import {
  activated_all,
  activated_following,
  activated_recommend,
  activated_watchlist,
} from '../../lib/variable'
import { antblue050, grey060 } from '../../lib/styles/colors'
import media from '../../lib/styles/media'

type MapType = {
  [index: string]: number
  recommend: number
  following: number
  watchlist: number
  all: number
}

const tabIndexMap: MapType = {
  recommend: 0,
  following: 1,
  watchlist: 2,
  all: 3,
}

export default function FeedTab() {
  const pathname = useGetRoutePath()
  const history = useHistory()
  const tabIndex = tabIndexMap[pathname]

  return (
    <>
      <FeedTabWraaper>
        <TabItem
          isClicked={pathname === activated_recommend}
          onClick={() => history.push('/')}
        >
          <Text>추천</Text>
        </TabItem>
        <TabItem
          isClicked={pathname === activated_following}
          onClick={() => history.push('/following')}
        >
          <Text>팔로잉</Text>
        </TabItem>
        <TabItem
          isClicked={pathname === activated_watchlist}
          onClick={() => history.push('/watchlist')}
        >
          <Text>관심종목</Text>
        </TabItem>
        <TabItem
          isClicked={pathname === activated_all}
          onClick={() => history.push('/all')}
        >
          <Text>전체</Text>
        </TabItem>
        <Indicator
          style={{
            left: `${tabIndex * 25}%`,
          }}
        />
      </FeedTabWraaper>
    </>
  )
}

const Text = styled.div`
  margin-bottom: 1.4rem;
`

const FeedTabWraaper = styled.div`
  position: relative;
  margin: 2.3rem 5rem 0 5rem;
  padding-top: 2.2rem;
  display: flex;
  color: ${grey060};
  border-bottom: 1px solid #ececec;
  ${media.medium} {
    margin: 0;
  }
`

const TabItem = styled.div<{ isClicked: boolean }>`
  width: 100%;
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: ${(p) => (p.isClicked ? antblue050 : grey060)};
  font-weight: ${(p) => (p.isClicked ? 700 : 400)};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  ${media.medium} {
    font-size: 1.4rem;
    line-height: 1.9rem;
  }
`

const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(25%);
  height: 0.3rem;
  background-color: ${antblue050};
  border-radius: 3px;
  transition: 0.25s left ease-in-out;
`
