import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { batterySaga } from './battery'

export const rootSaga = function*() {
  try {
    yield all([
      batterySaga(),
    ])
  } catch (e) {
    console.error(e)
  }
}


export const sagaMiddleware = createSagaMiddleware()