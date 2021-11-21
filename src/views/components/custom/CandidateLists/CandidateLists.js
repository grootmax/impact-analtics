import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'

import useCandidatesData from '../../hooks/useCandidatesData'
import './CandidateLists.css'

const CandidateLists = ({ userStatus }) => {
  const { data } = useCandidatesData()

  const filteredCandidates = data.candidateLists.filter(
    (candidate) => candidate.status === userStatus
  )

  return (
    <div className="candidate-lists">
      <div className="candidate-lists__header">{`${
        userStatus === 'S' ? 'Shortlisted' : 'Rejected'
      } Candidates`}</div>
      <List className="candidate-lists__lists">
        {filteredCandidates && filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidateDetails) => {
            return (
              <React.Fragment key={candidateDetails.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={candidateDetails.name}
                      src={candidateDetails.Image}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={candidateDetails.name} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            )
          })
        ) : (
          <span>No records found</span>
        )}
      </List>
    </div>
  )
}

CandidateLists.propTypes = {
  userStatus: PropTypes.string.isRequired,
}

export default CandidateLists
