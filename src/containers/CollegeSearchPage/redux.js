// @flow

import { from as fromJS, set } from 'seamless-immutable'

// ------------------ Define Types ------------------

export type CollegeSearchPageState = {
  sortOrder: SortOrder,
  filterMap: FilterMap,
  colleges: Array<Object>
}

// ------------------ Define Constants ------------------

export const SET_SORT_ORDER = 'app/CollegeSearchPage/SET_SORT_ORDER'
export const SET_FILTER = 'app/CollegeSearchPage/SET_FILTER'
export const SET_COLLEGES = 'app/CollegeSearchPage/SET_COLLEGES'

export const constants = { SET_SORT_ORDER, SET_FILTER, SET_COLLEGES }

// ------------------ Define Actions ------------------

export function setSortOrder(sortOrder: SortOrder) {
  return { type: SET_SORT_ORDER, sortOrder }
}

export function setFilter(filterKey: string, filterValue: FilterValue) {
  return { type: SET_FILTER, filterKey, filterValue }
}

export function setColleges({ colleges }: Object) {
  return { type: SET_COLLEGES, colleges }
}

export const actions = { setSortOrder, setFilter, setColleges }

type SetSortOrderAction = {
  type: SET_SORT_ORDER,
  sortOrder: SortOrder
}

type SetFilterAction = {
  type: SET_FILTER,
  filters: FilterMap
}

type SetCollegesAction = {
  type: SET_COLLEGES,
  colleges: Array<Object>,
  limit: number,
  offset: number,
  total: number
}

type CollegeSearchPageAction =
  | SetSortOrderAction
  | SetFilterAction
  | SetCollegesAction

// ------------------ Define State / Reducer ------------------

const initialState: CollegeSearchPageState = fromJS({
  sortOrder: {
    category: 'general',
    name: 'Best Colleges',
    collegeKey: 'bestColleges',
    id: 'best-colleges',
    limit: 25,
    offset: 0,
    total: 25
  },
  filterMap: {
    location: {
      value: 'America'
    },
    collegeType: {
      fouryear: true,
      private: true,
      private: true,
      public: true,
      twoyear: false,
      community: false,
      tradeCareer: false
    },
    major: {
      value: 'all'
    },
    cost: {
      netPrice: {
        value: 36000
      }
    },
    specialty: {
      online: false,
      liberalArts: false,
      allWomen: false,
      allMen: false,
      hbcu: false
    },
    admissions: {
      noAdmissionsFee: false,
      acceptsCommonApp: false,
      testOptional: false
    },
    religiousAffiliation: {
      catholic: false,
      christian: false,
      jewish: false
    },
    studentBodySize: {
      small: false,
      medium: false,
      large: false
    },
    yourTestScores: {
      sat: {
        value: 0
      },
      act: {
        value: 0
      }
    }
  },
  colleges: []
})

function collegeSearchPageReducer(
  state: ChanceMePageState = initialState,
  action: CollegeSearchPageAction
) {
  switch (action.type) {
    case SET_SORT_ORDER:
      return state.set('sortOrder', action.sortOrder)
    case SET_FILTER:
      return state.setIn(['filterMap', action.filterKey], action.filterValue)
    case SET_COLLEGES:
      return state.setIn(['colleges'], action.colleges)
    default:
      return state
  }
}

export default collegeSearchPageReducer
