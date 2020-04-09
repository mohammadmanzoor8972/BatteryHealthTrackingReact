import { combineReducers } from 'redux'
import { IBatteryState, batteryReducer } from './battery';

export interface AppState {
  academy: IBatteryState
}



export const rootReducer = combineReducers({
  academy: batteryReducer
})