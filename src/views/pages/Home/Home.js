import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../components/custom/Card/Card'
import Toggle from '../../components/base/Toggle/Toggle'
import SearchBox from '../../components/base/SearchBox/SearchBox'
import useCandidatesData from '../../components/hooks/useCandidatesData'
import './Home.css'

const Home = ({ history }) => {
  const { data, dispatch } = useCandidatesData()

  function onStatusChange(selectedValue) {
    dispatch({ type: 'UPDATE_USERSTATUS', userStatus: selectedValue })
    history.push({
      pathname: selectedValue === 'S' ? '/shortlisted' : 'rejected',
      state: {
        status: selectedValue,
      },
    })
  }

  function onSearchTextChangeHandler(value) {
    dispatch({ type: 'ON_SEARCHCANDIDATE', searchText: value })
  }

  return (
    <div className="home">
      <div className="home__header">Job Portal</div>
      <div className="home__search">
        <SearchBox
          onChangeHandler={onSearchTextChangeHandler}
          onSearchClickHandler={() => {}}
        />
      </div>
      <div className="home__userstatus">
        <Toggle
          id="user-status"
          value={data.userStatus}
          dataSource={data.userStatusTypes}
          onChange={onStatusChange}
        />
      </div>
      <div className="home__cards">
        {data.candidateLists &&
          data.candidateLists.map((candidateDetails) => {
            if (
              (data.searchText &&
                candidateDetails.name
                  .toLowerCase()
                  .includes(data.searchText.toLowerCase())) ||
              !data.searchText
            )
              return (
                <Card key={candidateDetails.id} userData={candidateDetails} />
              )

            return null
          })}
      </div>
    </div>
  )
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default Home
