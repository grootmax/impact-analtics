import React from 'react'

const CandidateContext = React.createContext({
  data: null,
  dispatch: () => null,
})

function useCandidatesData() {
  const { Provider } = CandidateContext
  const { data, dispatch } = React.useContext(CandidateContext)

  return { CandidateProvider: Provider, data, dispatch }
}

export default useCandidatesData
