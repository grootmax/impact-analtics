import React from 'react'
import PropTypes from 'prop-types'

import CandidateLists from '../../components/custom/CandidateLists/CandidateLists'
import './CandidateStatus.css'

const CandidateStatus = ({ location }) => {
  return (
    <div className="candidate-status">
      <CandidateLists userStatus={location.state.status} />
    </div>
  )
}

CandidateStatus.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ status: PropTypes.string }),
  }).isRequired,
}

export default CandidateStatus
