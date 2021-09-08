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

export default function FeedTab() {
  const pathname = useGetRoutePath()
  const history = useHistory()

  return (
    <>
      <FeedTabWraaper>
        <TabItem
          isClicked={pathname === activated_recommend}
          onClick={() => history.push('/')}
        >
          <Text>추천</Text>
          <Line isClicked={pathname === activated_recommend} />
        </TabItem>
        <TabItem
          isClicked={pathname === activated_following}
          onClick={() => history.push('/following')}
        >
          <Text>팔로잉</Text>
          <Line isClicked={pathname === activated_following} />
        </TabItem>
        <TabItem
          isClicked={pathname === activated_watchlist}
          onClick={() => history.push('/watchlist')}
        >
          <Text>관심종목</Text>
          <Line isClicked={pathname === activated_watchlist} />
        </TabItem>
        <TabItem
          isClicked={pathname === activated_all}
          onClick={() => history.push('/all')}
        >
          <Text>전체</Text>
          <Line isClicked={pathname === activated_all} />
        </TabItem>
      </FeedTabWraaper>
    </>
  )
}

const Text = styled.div`
  margin-bottom: 14px;
`

const FeedTabWraaper = styled.div`
  margin-top: 23px;
  padding: 22px 84px 0 84px;
  display: flex;
  justify-content: center;
  column-gap: 38px;
  color: ${grey060};
  border-bottom: 1px solid #ececec;
`

const TabItem = styled.div<{ isClicked: boolean }>`
  font-size: 18px;
  line-height: 23px;
  color: ${(p) => (p.isClicked ? antblue050 : grey060)};
  font-weight: ${(p) => (p.isClicked ? 700 : 400)};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
`

const Line = styled.div<{ isClicked: boolean }>`
  visibility: ${(p) => (p.isClicked ? 'visible' : 'hidden')};
  width: 102px;
  height: 3px;
  background-color: ${antblue050};
  border-radius: 3px;
`
