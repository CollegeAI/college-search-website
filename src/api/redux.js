// @flow

import { from as fromJS, set } from 'seamless-immutable'

// ------------------ Define Types ------------------

export type ApiState = {
  college: Object,
  collegeAddedList: Array<{ collegeId: string }>
}

// ------------------ Define Constants ------------------

export const TRACK_EVENT = 'app/api/TRACK_EVENT'
export const SET_COLLEGE = 'app/api/SET_COLLEGE'
export const GET_COLLEGE = 'app/api/GET_COLLEGE'
export const ADD_COLLEGE_TO_LIST = 'app/api/ADD_COLLEGE_TO_LIST'
export const REMOVE_COLLEGE_FROM_LIST = 'app/api/REMOVE_COLLEGE_FROM_LIST'
export const SET_COLLEGE_LIST = 'app/api/SET_COLLEGE_LIST'
export const GET_AUTOCOMPLETE_SUGGESTIONS =
  'app/api/GET_AUTOCOMPLETE_SUGGESTIONS'
export const SET_AUTOCOMPLETE_SUGGESTIONS =
  'app/api/SET_AUTOCOMPLETE_SUGGESTIONS'
export const SET_AUTOCOMPLETE_VALUE = 'app/api/SET_AUTOCOMPLETE_VALUE'

export const constants = {
  GET_AUTOCOMPLETE_SUGGESTIONS,
  SET_AUTOCOMPLETE_SUGGESTIONS,
  SET_AUTOCOMPLETE_VALUE,
  TRACK_EVENT,
  SET_COLLEGE,
  GET_COLLEGE,
  ADD_COLLEGE_TO_LIST,
  REMOVE_COLLEGE_FROM_LIST,
  SET_COLLEGE_LIST
}

// ------------------ Define Actions ------------------

export function getAutocompleteSuggestions(searchValue) {
  return { type: GET_AUTOCOMPLETE_SUGGESTIONS, searchValue }
}

export function setAutocompleteSuggestions(suggestions) {
  return { type: SET_AUTOCOMPLETE_SUGGESTIONS, suggestions }
}

export function setAutocompleteValue(searchValue) {
  return { type: SET_AUTOCOMPLETE_VALUE, searchValue }
}

export function setCollege({ college }: Object) {
  return { type: SET_COLLEGE, college }
}

export function getCollege(params: Object) {
  return { type: GET_COLLEGE, ...params }
}

export function trackEvent(event: any) {
  return { type: TRACK_EVENT, event }
}

export function setCollegeList(params) {
  return { type: SET_COLLEGE_LIST, ...params }
}

export function addCollegeToList(params) {
  return { type: ADD_COLLEGE_TO_LIST, ...params }
}

export function removeCollegeFromList(params) {
  return { type: REMOVE_COLLEGE_FROM_LIST, ...params }
}

export const actions = {
  getAutocompleteSuggestions,
  setAutocompleteSuggestions,
  setAutocompleteValue,
  trackEvent,
  setCollege,
  getCollege,
  addCollegeToList,
  removeCollegeFromList,
  setCollegeList
}

type GetAutocompleteSuggestionsAction = {
  type: GET_AUTOCOMPLETE_SUGGESTIONS,
  searchValue: string
}

type SetAutocompleteSuggestionsAction = {
  type: SET_AUTOCOMPLETE_SUGGESTIONS,
  suggestions: string
}

type SetAutocompleteValueAction = {
  type: SET_AUTOCOMPLETE_VALUE,
  searchValue: string
}

type TrackEventAction = {
  type: TRACK_EVENT,
  event: any
}

type SetCollegeAction = {
  type: SET_COLLEGE,
  colleges: Object
}

type GetCollegeAction = {
  type: GET_COLLEGE
}

type SetCollegeList = {
  type: SET_COLLEGE_LIST,
  colleges: Array<{ id: string }>
}

type AddCollegeToList = {
  type: ADD_COLLEGE_TO_LIST,
  college: { id: string }
}
type RemoveCollegeFromList = {
  type: REMOVE_COLLEGE_FROM_LIST,
  college: { id: string }
}

type ApiAction =
  | GetAutocompleteSuggestionsAction
  | SetAutocompleteSuggestionsAction
  | SetAutocompleteValueAction
  | TrackEventAction
  | SetCollegeAction
  | GetCollegeAction
  | AddCollegeToList
  | SetCollegeList
  | RemoveCollegeFromList

// ------------------ Define State / Reducer ------------------

const initialState: ApiState = fromJS({
  college: {},
  collegeAddedList: []
})

function apiReducer(state: ApiState = initialState, action: ApiAction) {
  switch (action.type) {
    case SET_AUTOCOMPLETE_SUGGESTIONS: {
      return state.setIn(['autocomplete', 'suggestions'], action.suggestions)
    }
    case SET_AUTOCOMPLETE_VALUE: {
      return state.setIn(['autocomplete', 'value'], action.searchValue)
    }
    case SET_COLLEGE: {
      return state.set('college', action.college)
    }
    case SET_COLLEGE_LIST:
      return state.set('collegeAddedList', action.colleges)
    case ADD_COLLEGE_TO_LIST:
      return state.update('collegeAddedList', collegeList =>
        collegeList.concat(action.college)
      )
    case REMOVE_COLLEGE_FROM_LIST:
      return state.update('collegeAddedList', collegeList =>
        collegeList.filter(c => c.id !== action.college.id)
      )
    default:
      return state
  }
}

export default apiReducer
