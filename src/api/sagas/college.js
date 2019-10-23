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
} from "redux-saga/effects"
import objectPath from "object-path"
import { delay } from "redux-saga"
import { LOCATION_CHANGE } from "react-router-redux"
import { actions, constants } from "../redux"

import collegeInfoIds from "../../utils/college-info-ids"

import { waitUntilCollegeAILoads } from "./utils"

export function* getCollege(getCollegeParams: Object): Generator<*, *, *> {
  try {
    const isLoaded = yield call(waitUntilCollegeAILoads)
    if (!isLoaded) {
      return
    }
    const response = yield call(
      window.collegeai.getCollegeInfo,
      [getCollegeParams.collegeId],
      collegeInfoIds.map(c => c.infoId)
    )
    const [collegeInfo] = response
    const collegeObjPath = {
      id: getCollegeParams.collegeId
    }
    for (let collegeInfoId of collegeInfoIds) {
      if (collegeInfo[collegeInfoId.infoId]) {
        objectPath.set(
          collegeObjPath,
          collegeInfoId.path,
          collegeInfo[collegeInfoId.infoId]
        )
      } else {
        var rootPathRegex = /(.*)\.[^\.]+/g
        const [rootPath, subPath] = rootPathRegex.exec(collegeInfoId.path)
        if (subPath && !objectPath.has(collegeObjPath, subPath)) {
          objectPath.set(collegeObjPath, subPath, {})
        }
        // console.log(`Missing infoId: ${collegeInfoId.infoId}`)
      }
    }
    yield put(actions.setCollege({ college: collegeObjPath }))
  } catch (err) {
    // TODO: Handle Err
    console.log({ err })
  }
}

export function* addCollegeToList(params): Generator<*, *, *> {
  try {
    const isLoaded = yield call(waitUntilCollegeAILoads)
    if (!isLoaded) {
      return
    }
    const userColleges = yield select(state => state.api.collegeAddedList)
    const { userId } = window.collegeai.state
    const attributeMap = {
      colleges: JSON.stringify(
        userColleges
          .map(c => c.id)
          .filter(c => c !== params.id)
          .concat(params.id)
      )
    }

    const response = yield call(window.collegeai.updateUserAttribute, {
      userId,
      attributeMap
    })
  } catch (err) {
    // TODO: Handle Err
    console.log({ err })
  }
}

export function* removeCollegeFromList(params): Generator<*, *, *> {
  try {
    const isLoaded = yield call(waitUntilCollegeAILoads)
    if (!isLoaded) {
      return
    }
    const userColleges = yield select(state => state.api.collegeAddedList)
    const { userId } = window.collegeai.state
    const attributeMap = {
      colleges: JSON.stringify(
        userColleges
          .map(c => c.collegeId)
          .filter(c => c !== params.college.collegeId)
          .concat(params.college.collegeId)
      )
    }

    const response = yield call(window.collegeai.updateUserAttribute, {
      userId,
      attributeMap
    })
  } catch (err) {
    // TODO: Handle Err
    console.log({ err })
  }
}

export function* getCollegeAutocomplete(getCollegeAutocompleteParams: {
  searchValue: string
}): Generator<*, *, *> {
  try {
    const isLoaded = yield call(waitUntilCollegeAILoads)
    if (!isLoaded) {
      return
    }

    const colleges = yield call(
      window.collegeai.getCollegeAutocomplete,
      getCollegeAutocompleteParams.searchValue
    )
    yield put(actions.setAutocompleteSuggestions(colleges))
  } catch (err) {
    // TODO: Handle Err
    console.log({ err })
  }
}

export function* collegeSagasWatcher(): Generator<*, *, *> {
  yield takeLatest(constants.GET_COLLEGE, getCollege)
  yield takeLatest(constants.ADD_COLLEGE_TO_LIST, addCollegeToList)
  yield takeLatest(constants.REMOVE_COLLEGE_FROM_LIST, removeCollegeFromList)
  yield throttle(
    250,
    constants.GET_AUTOCOMPLETE_SUGGESTIONS,
    getCollegeAutocomplete
  )
}

export default [collegeSagasWatcher]
