import React from 'react'
import PropTypes from 'prop-types'

import Actions from '../../components/custom/Actions/Actions'
import useCandidatesData from '../../components/hooks/useCandidatesData'
import './CandidateDetails.css'

const CandidateDetails = ({ match }) => {
  const { data } = useCandidatesData()
  const userId = match.params.id

  const candidateData =
    data && data.candidateLists.find((userData) => userData.id === userId)

  return (
    <div className="candidate-details">
      <div className="candidate-details__header">Candidate Details</div>
      <div className="candidate-details__content">
        <div className="candidate-details__image">
          <img src={candidateData?.Image} alt={candidateData?.name} />
        </div>
        <div className="candidate-details__right">
          <div className="candidate-details__username">
            {candidateData?.name}
          </div>
          <Actions className="candidate-details__actions" userId={userId} />
        </div>
      </div>
    </div>
  )
}

CandidateDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
}

export default CandidateDetails
