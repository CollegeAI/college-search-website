// @flow

import {
  put,
  take,
  call,
  takeEvery,
  throttle,
  cancel,
  select
} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import objectPath from 'object-path'
import { checkPageRoute, waitUntilPage } from '../../api/sagas/navigate'
import { waitUntilCollegeAILoads } from '../../api/sagas/utils'
import { get } from '../../api/utils'
import { constants, actions } from './redux'
import collegeInfoIds from '../../utils/college-info-ids'

export function* initPage(): Generator<*, *, *> {
  yield* searchColleges()
}

export function* searchColleges(): Generator<*, *, *> {
  // Get intial colleges
  const { sortOrder, filterMap } = yield select(
    state => state.collegeSearchPage
  )

  const isLoaded = yield call(waitUntilCollegeAILoads)
  if (!isLoaded) {
    return
  }
  let filters = {}
  if (filterMap['yourTestScores']['act'].value > 0) {
    filters['actComposite'] = filterMap['yourTestScores']['act'].value
  }
  if (filterMap['yourTestScores']['sat'].value > 0) {
    filters['satOverall'] = filterMap['yourTestScores']['sat'].value
  }

  filters['schoolSize'] = []
    .concat(filterMap['studentBodySize']['small'] ? ['small'] : [])
    .concat(filterMap['studentBodySize']['medium'] ? ['medium'] : [])
    .concat(filterMap['studentBodySize']['large'] ? ['large'] : [])

  filters['sex'] = []
    .concat(filterMap['specialty']['allWomen'] ? ['women'] : [])
    .concat(filterMap['specialty']['allMen'] ? ['men'] : [])

  filters['online'] = [].concat(
    filterMap['specialty']['online'] ? ['only'] : []
  )

  filters['online'] = [].concat(
    filterMap['specialty']['online'] ? ['only'] : []
  )

  filters['online'] = [].concat(
    filterMap['specialty']['online'] ? ['only'] : []
  )

  filters['maxNetCost'] =
    filterMap.cost.netPrice.value === 36000
      ? null
      : filterMap.cost.netPrice.value

  filters['fundingType'] = []
    .concat(filterMap['collegeType']['public'] ? ['public'] : [])
    .concat(filterMap['collegeType']['private'] ? ['private'] : [])

  filters['major'] = [].concat(
    filterMap['major']['value'] !== 'all' ? [filterMap['major']['value']] : []
  )

  filters['degreeLength'] = []
    .concat(
      filterMap['collegeType']['public'] || filterMap['collegeType']['private']
        ? ['4year']
        : []
    )
    .concat(filterMap['collegeType']['twoYear'] ? ['2year'] : [])

  filters['primaryFaith'] = []
    .concat(filterMap['religiousAffiliation']['catholic'] ? ['catholic'] : [])
    .concat(filterMap['religiousAffiliation']['christian'] ? ['christian'] : [])
    .concat(filterMap['religiousAffiliation']['jewish'] ? ['jewish'] : [])

  const colleges = yield call(window.collegeai.searchColleges, {
    limit: sortOrder.limit,
    offset: sortOrder.offset,
    withPros: false,
    withCons: false,
    allowedReasonIds: [],
    sortOrder: sortOrder.id,
    filters,
    infoIds: collegeInfoIds.map(c => c.infoId)
  })
  const displayColleges = []
  for (let college of colleges) {
    const collegeInfo = {
      collegeId: college.collegeId
    }
    for (let collegeInfoId of collegeInfoIds) {
      if (college[collegeInfoId.infoId]) {
        objectPath.set(
          collegeInfo,
          collegeInfoId.path,
          college[collegeInfoId.infoId]
        )
      } else {
        var rootPathRegex = /(.*)\.[^\.]+/g
        const [rootPath, subPath] = rootPathRegex.exec(collegeInfoId.path) || []
        if (subPath && !objectPath.has(collegeInfo, subPath)) {
          objectPath.set(collegeInfo, subPath, {})
        }
        // console.log(`Missing infoId: ${collegeInfoId.infoId}`)
      }
    }
    displayColleges.push(collegeInfo)
  }

  yield put(actions.setColleges({ colleges: displayColleges }))
}

const routeRegExp = RegExp('/colleges/search', 'g')

/**
 * Root saga manages watcher lifecycle
 */
export function* collegeSearchPage() {
  while (true) {
    yield* waitUntilPage(routeRegExp, true)
    yield* initPage()
    const searchCollegesWatcher = yield throttle(
      250,
      [constants.SET_SORT_ORDER, constants.SET_FILTER],
      searchColleges
    )
    yield* waitUntilPage(routeRegExp, false)
    yield cancel(searchCollegesWatcher)
  }
}

// All sagas to be loaded
export default collegeSearchPage
