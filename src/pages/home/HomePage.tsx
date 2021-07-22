import React from 'react'
import MainTemplate from '../../components/main/MainTemPlate'
import AllFeedPage from './HomeAllFeedPage'
import FollowingFeedPage from './HomeFollowingFeedPage'
import WatchlistFeedPage from './HomeWatchlistFeedPage'
import { Route } from 'react-router-dom'
import PostForm from '../../components/post/PostForm'
import FeedTab from '../../components/feed/FeedTab'

export type HomePageProps = {}

function HomePage(props: HomePageProps) {
  return (
    <MainTemplate
      children={
        <>
          <PostForm />
          <FeedTab />
          <Route path={['/', '/all']} component={AllFeedPage} exact />
          <Route path={['/watchlist']} component={WatchlistFeedPage} />
          <Route path={['/following']} component={FollowingFeedPage} />
        </>
      }
    />
  )
}

export default HomePage
