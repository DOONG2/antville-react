import React from 'react'
import MainTemplate from '../../components/main/MainTemPlate'
import AllFeedPage from './HomeAllFeedPage'
import FollowingFeedPage from './HomeFollowingFeedPage'
import WatchlistFeedPage from './HomeWatchlistFeedPage'
import { Route } from 'react-router-dom'
import { useRootState } from '../../components/common/hooks/useRootState'
import HomeRecomendFeedPage from './HomeRecomendFeedPage'
import { Wrapper } from '../../lib/styles/feed'
import PostForm from '../../components/post/PostForm'
import FeedTab from '../../components/feed/FeedTab'
import { Desktop } from '../../components/common/Responsive'

function HomePage() {
  const user = useRootState((state) => state.user)

  if (!user) return <></>

  return (
    <MainTemplate
      children={
        <>
          <Desktop>
            <Wrapper>
              <PostForm extended={true} />
            </Wrapper>
          </Desktop>
          <Wrapper>
            <FeedTab />
            <Route
              path={['/', '/recomend']}
              render={() => <HomeRecomendFeedPage id={String(user.id)} />}
              exact
            />
            <Route
              path={['/watchlist']}
              render={() => <WatchlistFeedPage id={String(user.id)} />}
            />
            <Route
              path={['/following']}
              render={() => <FollowingFeedPage id={String(user.id)} />}
            />
            <Route
              path={['/all']}
              render={() => <AllFeedPage id={String(user.id)} />}
              exact
            />
          </Wrapper>
        </>
      }
    />
  )
}

export default HomePage
