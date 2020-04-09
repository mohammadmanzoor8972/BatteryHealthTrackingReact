import { takeLatest, put, all } from 'redux-saga/effects'
import { batteryService } from '../../services/battery.service'
import { TYPES as UsersTypes, ACTIONS as UsersActions } from '../actions/battery'

export function* fetchAcadmey() {
  const res = yield batteryService.getAcademy()
  yield put(UsersActions.academyFetchd(res))
}

export function* batterySaga() {
  yield all([
    takeLatest(UsersTypes.FETCH_ACADEMY, fetchAcadmey),
  ])
}
