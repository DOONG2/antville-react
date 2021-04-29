import React from 'react'
import { Route, Redirect } from 'react-router-dom'

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
          <Redirect
            to={{ pathname: '/feed', state: { from: props.location } }}
          />
        ) : render ? (
          render(props)
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default AuthRoute
