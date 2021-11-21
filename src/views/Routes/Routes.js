import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'))
const CandidateStatus = lazy(() =>
  import('../pages/CandidateStatus/CandidateStatus')
)
const CandidateDetails = lazy(() =>
  import('../pages/CandidateDetails/CandidateDetails')
)
const Home = lazy(() => import('../pages/Home/Home'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shortlisted" component={CandidateStatus} />
          <Route exact path="/rejected" component={CandidateStatus} />
          <Route path="/user/:id" component={CandidateDetails} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
