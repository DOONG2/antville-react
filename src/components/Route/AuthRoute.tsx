import React from 'react'
import { Route } from 'react-router-dom'

function AuthRoute({
  authenticated,
  component: Component,
  redirect: RedirectComponent,
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
          <RedirectComponent {...props} />
        )
      }
    />
  )
}

export default AuthRoute
