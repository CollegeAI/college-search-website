// @flow
import 'isomorphic-fetch'
import { fork } from 'redux-saga/effects'

import apiSagas from './api'
import homePageSagas from './containers/HomePage/sagas'
import searchPageSagas from './containers/CollegeSearchPage/sagas'
import collegePageSagas from './containers/CollegePage/sagas'
import collegeRankingPageSagas from './containers/CollegeRankingPage/sagas'
import collegeAdmissionsPageSagas from './containers/CollegeAdmissionsPage/sagas'
import collegeCostPageSagas from './containers/CollegeCostPage/sagas'
import collegeAcademicsPageSagas from './containers/CollegeAcademicsPage/sagas'
import collegeMajorsPageSagas from './containers/CollegeMajorsPage/sagas'
import collegeStudentsPageSagas from './containers/CollegeStudentsPage/sagas'
import collegeCampusLifePageSagas from './containers/CollegeCampusLifePage/sagas'
import collegeAfterPageSagas from './containers/CollegeAfterPage/sagas'

const sagas = [
  ...apiSagas,
  homePageSagas,
  searchPageSagas,
  collegePageSagas,
  collegeRankingPageSagas,
  collegeAdmissionsPageSagas,
  collegeCostPageSagas,
  collegeAcademicsPageSagas,
  collegeMajorsPageSagas,
  collegeStudentsPageSagas,
  collegeCampusLifePageSagas,
  collegeAfterPageSagas
]

export default function* runSagas(): Generator<*, *, *> {
  // window.testLocation = 'http://localhost:3000'
  yield sagas.map(fork)
}
