import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import useGetRoutePath from './hooks/useGetPath'
import {
  activated_all,
  activated_following,
  activated_watchlist,
} from '../../lib/variable'

export default function FeedTab() {
  const pathanme = useGetRoutePath()
  const history = useHistory()

  return (
    <>
      <FeedTabWraaper>
        <TabItem
          isClicked={pathanme === activated_all}
          onClick={() => history.push('/')}
        >
          전체
        </TabItem>
        <TabItem
          isClicked={pathanme === activated_watchlist}
          onClick={() => history.push('/watchlist')}
        >
          관심종목
        </TabItem>
        <TabItem
          isClicked={pathanme === activated_following}
          onClick={() => history.push('/following')}
        >
          팔로잉
        </TabItem>
      </FeedTabWraaper>
    </>
  )
}

const FeedTabWraaper = styled.div`
  margin-top: 23px;
  padding: 15px 21px;
  display: flex;
  column-gap: 44px;

  border-bottom: 1px solid #ececec;
`

const TabItem = styled.div<{ isClicked: boolean }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  padding-bottom: 3px;

  color: #000000;

  cursor: pointer;

  border-bottom: ${(p) => (p.isClicked ? '1px solid #1942e0' : 'none')};
`
