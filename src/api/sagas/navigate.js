// @flow

import { take, takeEvery, call, put, select, race } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

export function* checkPageRoute(routeRegExp: RegExp): Generator<*, *, *> {
  const locationChangeAction = yield take(LOCATION_CHANGE)
  if (routeRegExp.test(locationChangeAction.payload.pathname)) {
    return true
  } else {
    return false
  }
}

export function* waitUntilPage(
  route: string,
  isPage: boolean = true
): Generator<*, *, *> {
  while (true) {
    const isCorrectPage = yield* checkPageRoute(route)
    if ((isCorrectPage && isPage) || (!isCorrectPage && !isPage)) {
      document.body.scrollTop = document.documentElement.scrollTop = 0
      break
    }
  }
}
