// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import { Route } from 'react-router'

import { routerReducer, routerMiddleware } from 'react-router-redux'
import createReducers from './reducers' // Or wherever you keep your reducers
import sagas from './sagas'

export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware()

  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = [routerMiddleware(history), sagaMiddleware]

  // Add redux dev tools extension to debug redux win browser
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    createReducers(),
    composeEnhancers(applyMiddleware(...middleware))
  )

  // Start All Sagas
  sagaMiddleware.run(sagas)

  return store
}
