// @flow
import 'isomorphic-fetch'
import { fork } from 'redux-saga/effects'

import initSaga from './sagas/init'
import trackingSaga from './sagas/tracking'
import collegeSaga from './sagas/college'

export default [initSaga, trackingSaga, ...collegeSaga]
