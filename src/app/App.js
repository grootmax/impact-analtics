import React from 'react'
import ErrorBoundary from '../views/pages/ErrorBoundary/ErrorBoundary'

import useCandidatesData from '../views/components/hooks/useCandidatesData'
import getAPIData from '../models/api/api'
import Routes from '../views/Routes/Routes'
import './App.css'

function stateReducer(state, action) {
  switch (action.type) {
    case 'SET_CANDIDATELISTS':
      return { ...state, candidateLists: action.candidateLists }
    case 'UPDATE_USERSTATUS':
      return { ...state, userStatus: action.userStatus }
    case 'SET_SHORTLIST':
      return {
        ...state,
        candidateLists: state.candidateLists.map((candidate) => {
          if (candidate.id === action.userId)
            return { ...candidate, status: 'S' }

          return { ...candidate }
        }),
      }
    case 'SET_REJECT':
      return {
        ...state,
        candidateLists: state.candidateLists.map((candidate) => {
          if (candidate.id === action.userId)
            return { ...candidate, status: 'R' }

          return { ...candidate }
        }),
      }
    case 'ON_SEARCHCANDIDATE':
      return { ...state, searchText: action.searchText }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const App = () => {
  const initialState = {
    candidateLists: null,
    userStatus: 'S',
    userStatusTypes: [
      { id: 'S', label: 'Shortlisted' },
      { id: 'R', label: 'Rejected' },
    ],
    searchText: '',
  }
  const [state, dispatch] = React.useReducer(stateReducer, initialState)
  const { CandidateProvider } = useCandidatesData()

  React.useEffect(() => {
    function fetchData() {
      getAPIData('get', '/he-public-data/users49b8675.json').then(({ data }) =>
        dispatch({ type: 'SET_CANDIDATELISTS', candidateLists: data })
      )
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <CandidateProvider value={{ data: state, dispatch }}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </CandidateProvider>
    </div>
  )
}

export default App
