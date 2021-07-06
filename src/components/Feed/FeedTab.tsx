import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useRootState } from '../../hooks/useRootState'
import {
  activated_all,
  activated_following,
  activated_watchlist,
} from '../../lib/variable'
import feedSlice from '../../reducers/Slices/feed'

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
export default function FeedTab() {
  const { activatedTab } = useRootState((state) => state.feed)
  const { setTabAll, setTabFollowing, setTabWatchList } = feedSlice.actions

  const dispatch = useDispatch()
  return (
    <>
      <FeedTabWraaper>
        <TabItem
          isClicked={activatedTab === activated_all}
          onClick={() => dispatch(setTabAll())}
        >
          전체
        </TabItem>
        <TabItem
          isClicked={activatedTab === activated_watchlist}
          onClick={() => dispatch(setTabWatchList())}
        >
          관심종목
        </TabItem>
        <TabItem
          isClicked={activatedTab === activated_following}
          onClick={() => dispatch(setTabFollowing())}
        >
          팔로잉
        </TabItem>
      </FeedTabWraaper>
    </>
  )
}
