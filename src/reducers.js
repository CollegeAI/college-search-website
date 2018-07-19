// @flow
/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import apiReducer from './api/redux'
import collegeSearchPageReducer from './containers/CollegeSearchPage/redux'
import homePageReducer from './containers/HomePage/redux'

// import reducers...
const reducers = {
  collegeSearchPage: collegeSearchPageReducer,
  api: apiReducer,
  homePage: homePageReducer
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers: any) {
  return combineReducers({
    ...reducers,
    router: routerReducer
  })
}
