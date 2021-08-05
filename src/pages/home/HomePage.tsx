import React from 'react'
import MainTemplate from '../../components/main/MainTemPlate'
import AllFeedPage from './HomeAllFeedPage'
import FollowingFeedPage from './HomeFollowingFeedPage'
import WatchlistFeedPage from './HomeWatchlistFeedPage'
import { Route } from 'react-router-dom'
import { useRootState } from '../../components/common/hooks/useRootState'

function HomePage() {
  const user = useRootState((state) => state.user)

  if (!user) return <></>

  return (
    <MainTemplate
      children={
        <>
          <Route
            path={['/', '/all']}
            render={() => <AllFeedPage id={user.id} />}
            exact
          />
          <Route
            path={['/watchlist']}
            render={() => <WatchlistFeedPage id={user.id} />}
          />
          <Route
            path={['/following']}
            render={() => <FollowingFeedPage id={user.id} />}
          />
        </>
      }
    />
  )
}

export default HomePage
