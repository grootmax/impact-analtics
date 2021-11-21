import React from 'react'
import PropTypes from 'prop-types'

import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props

    if (errorInfo) {
      return (
        <div className="errorboundary">
          <div className="errorboundary__container">
            <span className="errorboundary__logo">Logo</span>
            <span className="errorboundary__header">
              <span className="errorboundary__erroricon">X</span>
              <span className="errorboundary__title">Something went wrong</span>
            </span>
            <span className="errorboundary__message">
              {error && error.message}
            </span>
            <details
              open
              className="errorboundary__details"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <div className="errorboundary__summary">
                <summary>{error && error.toString()}</summary>
                <p>{errorInfo.componentStack}</p>
              </div>
            </details>
          </div>
        </div>
      )
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ErrorBoundary
