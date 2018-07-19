// @flow

import { call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* waitUntilCollegeAILoads(): Generator<*, *, *> {
  try {
    let attempts = 0
    const maxAttempts = 5
    while (
      (window.collegeai === undefined ||
        window.collegeai.state.userId === undefined ||
        window.collegeai.state.apiKey === undefined) &&
      attempts < maxAttempts
    ) {
      yield call(delay, 200)
      attempts += 1
    }
    return window.collegeai !== undefined
  } catch (err) {
    // TODO: Handle Err
    console.log({ err })
    return false
  }
}
