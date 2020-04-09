import { createAction } from 'redux-actions'

export const TYPES = {
  FETCH_ACADEMY: 'battery/FETCH_ACADEMY',
  ACADEMY_FETCHED: 'battery/ACADEMY_FETCHED',
  SELECT_ACADEMY: 'user/SELECT_ACADEMY',
  SELECT_DEVICE: 'user/SELECT_DEVICE'
}


export const ACTIONS = {
    fetchAcadmey: createAction(TYPES.FETCH_ACADEMY),
    academyFetchd: createAction(TYPES.ACADEMY_FETCHED),
    selectAcademy: createAction(TYPES.SELECT_ACADEMY),
    selectDevice: createAction(TYPES.SELECT_DEVICE)
}