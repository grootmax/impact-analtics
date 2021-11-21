import React from 'react'
import PropTypes from 'prop-types'

import './PageNotFound.css'

const PageNotFound = (props) => {
  return (
    <div className="pagenotfound">
      <div className="pagenotfound__title">
        <span className="pagenotfound__header">404</span>
        <span className="pagenotfound__subheader">Page not found</span>
      </div>
      <div className="pagenotfound__back">
        <span className="pagenotfound__backicon">
          <button type="button" onClick={() => props.history.goBack()}>
            {'<--'}
          </button>
        </span>
        <span className="pagenotfound__backtext">Go back</span>
      </div>
    </div>
  )
}

PageNotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
}

export default PageNotFound
