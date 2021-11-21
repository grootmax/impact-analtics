import React from 'react'
import PropTypes from 'prop-types'
import { Search as SearchIcon } from '@material-ui/icons'
import { InputBase } from '@material-ui/core'

import './SearchBox.css'

const SearchBox = ({ onChangeHandler, onSearchClickHandler }) => {
  return (
    <div className="searchbox">
      <div
        className="searchbox__icon"
        onClick={onSearchClickHandler}
        role="presentation"
      >
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search.."
        onChange={({ target }) => onChangeHandler(target.value)}
        className="searchbox_input"
      />
    </div>
  )
}

SearchBox.defaultProps = {
  onChangeHandler: () => null,
  onSearchClickHandler: () => null,
}

SearchBox.propTypes = {
  onChangeHandler: PropTypes.func,
  onSearchClickHandler: PropTypes.func,
}

export default SearchBox
