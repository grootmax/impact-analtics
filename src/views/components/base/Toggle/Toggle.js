import React from 'react'
import PropTypes from 'prop-types'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import './Toggle.css'

const Toggle = ({ id, value, onChange, dataSource }) => {
  return (
    <ToggleButtonGroup
      id={id}
      className="toggle"
      value={value}
      exclusive
      onChange={({ currentTarget }) => {
        onChange(currentTarget.value)
      }}
      aria-label="Toggle Button"
    >
      {dataSource &&
        dataSource.map((item) => {
          return (
            <ToggleButton
              key={item.id}
              aria-label="left aligned"
              value={item.id}
              disableRipple
            >
              {item.label}
            </ToggleButton>
          )
        })}
    </ToggleButtonGroup>
  )
}

Toggle.defaultProps = {
  onChange: () => null,
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Toggle
