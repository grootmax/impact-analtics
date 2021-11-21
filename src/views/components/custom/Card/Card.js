import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({ userData }) => {
  return (
    <Link className="create-usergroup__user" to={`/user/${userData.id}`}>
      <img
        role="presentation"
        className="create-usergroup__usericon"
        src={userData.Image}
        alt={userData.name}
      />
      <div className="create-usergroup__username">{userData.name}</div>
    </Link>
  )
}

Card.propTypes = {
  userData: PropTypes.shape({
    Image: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default Card
