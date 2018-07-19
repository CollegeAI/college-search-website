// @flow

import {
  put,
  call,
  take,
  takeEvery,
  cancel,
  throttle,
  select
} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { checkPageRoute, waitUntilPage } from '../../api/sagas/navigate'
import { waitUntilCollegeAILoads } from '../../api/sagas/utils'
import { actions as apiActions } from '../../api/redux'
import { constants, actions } from './redux'

export function* initPage(): Generator<*, *, *> {}

export function* changePathName(): Generator<*, *, *> {
  // Get intial colleges
  while (true) {
    const locationChangeAction = yield take(LOCATION_CHANGE)
    const collegeId = yield select(state => state.api.college.id)
    // If the route is different (Not the right page) break and reset
    if (
      locationChangeAction.payload.pathname !== '/' ||
      locationChangeAction.payload.pathname !== ''
    ) {
      break
    } else {
      yield* initPage()
    }
  }
}

export function* getCollegeAutocomplete(getCollegeAutocompleteParams: {
  searchValue: string
}): Generator<*, *, *> {
  const isLoaded = yield call(waitUntilCollegeAILoads)
  if (!isLoaded) {
    return
  }

  const colleges = yield call(
    window.collegeai.getCollegeAutocomplete,
    getCollegeAutocompleteParams.searchValue
  )
  yield put(actions.setAutocompleteSuggestions(colleges))
}

const routeRegExp = RegExp('/*', 'g')

/**
 * Root saga manages watcher lifecycle
 */
export function* collegeAfterPage() {
  while (true) {
    yield* waitUntilPage(routeRegExp, true)
    yield* initPage()
    const getAutocompleteSuggestionsWatcher = yield throttle(
      250,
      constants.GET_AUTOCOMPLETE_SUGGESTIONS,
      getCollegeAutocomplete
    )
    yield* changePathName()
    yield cancel(getAutocompleteSuggestionsWatcher)
  }
}

// All sagas to be loaded
export default collegeAfterPage
