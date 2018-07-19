// @flow

import { from as fromJS, set } from 'seamless-immutable'

// ------------------ Define Types ------------------

export type HomePageState = {
  autocomplete: {
    value: string,
    suggestions: Array<Object>
  }
}

// ------------------ Define Constants ------------------

export const GET_AUTOCOMPLETE_SUGGESTIONS =
  'app/HomePage/GET_AUTOCOMPLETE_SUGGESTIONS'
export const SET_AUTOCOMPLETE_SUGGESTIONS =
  'app/HomePage/SET_AUTOCOMPLETE_SUGGESTIONS'
export const SET_AUTOCOMPLETE_VALUE = 'app/HomePage/SET_AUTOCOMPLETE_VALUE'

export const constants = {
  GET_AUTOCOMPLETE_SUGGESTIONS,
  SET_AUTOCOMPLETE_SUGGESTIONS,
  SET_AUTOCOMPLETE_VALUE
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

export const actions = {
  getAutocompleteSuggestions,
  setAutocompleteSuggestions,
  setAutocompleteValue
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

type HomePageAction =
  | GetAutocompleteSuggestionsAction
  | SetAutocompleteSuggestionsAction
  | SetAutocompleteValueAction

// ------------------ Define State / Reducer ------------------

const initialState: HomePageState = fromJS({
  autocomplete: {
    value: '',
    suggestions: []
  }
})

function homePageReducer(
  state: HomePageState = initialState,
  action: HomePageAction
) {
  switch (action.type) {
    case SET_AUTOCOMPLETE_SUGGESTIONS: {
      return state.setIn(['autocomplete', 'suggestions'], action.suggestions)
    }
    case SET_AUTOCOMPLETE_VALUE: {
      return state.setIn(['autocomplete', 'value'], action.searchValue)
    }
    default:
      return state
  }
}

export default homePageReducer
