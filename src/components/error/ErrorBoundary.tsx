import React from 'react'
import * as Sentry from '@sentry/browser'
import ErrorScreen from '../../pages/ErrorScreen'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error)
    }
  }

  handleResolveError = () => {
    this.setState({
      hasError: false,
    })
  }
  render() {
    if (this.state.hasError) {
      return <ErrorScreen onResolve={this.handleResolveError} />
    }
    return <>{this.props.children}</>
  }
}

export default ErrorBoundary
