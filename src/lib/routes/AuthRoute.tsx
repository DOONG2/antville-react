import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../../pages/landing/LandingPage'

function AuthRoute({
  authenticated,
  component: Component,
  render,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <LandingPage />
        )
      }
    />
  )
}

export default AuthRoute
