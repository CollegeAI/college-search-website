// @flow

import { put, take, takeEvery, cancel, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { checkPageRoute, waitUntilPage } from '../../api/sagas/navigate'
import { get } from '../../api/utils'
import { constants, actions } from './redux'
import { actions as apiActions } from '../../api/redux'

// NOTE: Temporary
const routeRegExp = RegExp('colleges/(?!(/|search))[^/]+$')

export function* initPage(): Generator<*, *, *> {
  const pathname = yield select(state => state.router.location.pathname)

  let urlPart = pathname.split('/')
  let collegeId = urlPart[urlPart.length - 1].split('?')[0]

  yield put(apiActions.getCollege({ collegeId }))
}

export function* changePathName(): Generator<*, *, *> {
  // Get intial colleges
  while (true) {
    const locationChangeAction = yield take(LOCATION_CHANGE)
    const collegeId = yield select(state => state.api.college.id)

    // If the route is different (Not the right page) break and reset
    if (!routeRegExp.test(locationChangeAction.payload.pathname)) {
      break
    } else if (!locationChangeAction.payload.pathname.includes(collegeId)) {
      // If the page is still correct, but college is different, call init page to get the new college
      yield* initPage()
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* collegeSearchPage() {
  while (true) {
    yield* waitUntilPage(routeRegExp, true)
    yield* initPage()
    yield* changePathName()
  }
}

// All sagas to be loaded
export default collegeSearchPage
