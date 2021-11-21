import React from 'react'
import { Fab } from '@material-ui/core'
import { Done, Close } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import useCandidatesData from '../../hooks/useCandidatesData'
import './Actions.css'

const Actions = ({ className, userId }) => {
  const { dispatch } = useCandidatesData()
  const history = useHistory()

  return (
    <div className={`actions ${className}`}>
      <Fab
        className="actions__item shortlist"
        aria-label="add"
        disableRipple
        onClick={() => {
          dispatch({ type: 'SET_SHORTLIST', userId })
          history.push('/')
        }}
      >
        <Done />
      </Fab>
      <Fab
        className="actions__item reject"
        aria-label="add"
        disableRipple
        onClick={() => {
          dispatch({ type: 'SET_REJECT', userId })
          history.push('/')
        }}
      >
        <Close />
      </Fab>
    </div>
  )
}

Actions.defaultProps = {
  className: '',
}

Actions.propTypes = {
  className: PropTypes.string,
  userId: PropTypes.string.isRequired,
}

export default Actions
