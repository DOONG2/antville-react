import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import FeedPage from './pages/FeedPage'
import LandingPage from './pages/LandingPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={['/', 'landing']} component={LandingPage} />
      <Route exact path="/feed" component={FeedPage} />
    </Switch>
  )
}

export default Routes
