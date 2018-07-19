// @flow

import { from as fromJS, set } from 'seamless-immutable'

// ------------------ Define Types ------------------

export type CollegePageState = {}

// ------------------ Define Constants ------------------

export const constants = {}

// ------------------ Define Actions ------------------

export const actions = {}
type CollegePageAction = any

// ------------------ Define State / Reducer ------------------

const initialState: CollegePageState = fromJS({})

function collegePageReducer(
  state: CollegePageState = initialState,
  action: CollegePageAction
) {
  switch (action.type) {
    default:
      return state
  }
}

export default collegePageReducer
