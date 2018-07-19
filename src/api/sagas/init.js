// @flow

import {
  take,
  takeEvery,
  takeLatest,
  call,
  put,
  throttle,
  select,
  race
} from 'redux-saga/effects'
import objectPath from 'object-path'
import { delay } from 'redux-saga'
import { LOCATION_CHANGE } from 'react-router-redux'
import { actions, constants } from '../redux'
import { waitUntilCollegeAILoads } from './utils'

export default function* init(): Generator<*, *, *> {
  try {
    const isLoaded = yield call(waitUntilCollegeAILoads)
    if (!isLoaded) {
      return
    }

    const { userId } = window.collegeai.state

    const attributeKeys = ['colleges']
    // Get the user college list
    const response = yield call(window.collegeai.getUserAttribute, {
      attributeKeys,
      userId
    })
    const collegeList =
      (
        response['attribute_map'].colleges &&
        response['attribute_map'].colleges.filter(Boolean)
      ).map(id => ({ id })) || []
    yield put(actions.setCollegeList({ colleges: collegeList }))
  } catch (err) {
    console.log({ err })
  }
}
