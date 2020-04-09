import { ActionWithPayload } from '../../models/common'
import { TYPES } from '../actions/battery'
import { Battery } from '../../models/battery'
import { batteryService } from '../../services/battery.service'
import { Academy } from '../../models/academy';

export interface IBatteryState {
  academy: Academy[]
  isLoading: boolean
  selectedAcademyId: number,
  selectedDeviceId: number,
}

const initialState: IBatteryState = {
  academy: [],
  isLoading: false,
  selectedAcademyId: 0,
  selectedDeviceId: 0,
}

export const batteryReducer = (
  state = initialState,
  action: ActionWithPayload<any>
): IBatteryState => {
  switch (action.type) {
    case TYPES.FETCH_ACADEMY:
      return {
        ...initialState,
        isLoading: true,
      }

    case TYPES.ACADEMY_FETCHED:
      return {
        ...state,
        isLoading: false,
        academy: action.payload,
      }
    case TYPES.SELECT_ACADEMY:
      return {
        ...state,
        selectedAcademyId: action.payload
      }
    case TYPES.SELECT_DEVICE:
    return {
        ...state,
        selectedDeviceId: action.payload
    }
 
    default:
      return state
  }
}

const findAcademyById = (academy: Academy[]) => (academyId: number) => academy.find(u => u.academyId === academyId)


export const getAcademy = (state: IBatteryState) => state.academy;
export const getIsLoading = (state: IBatteryState) => state.isLoading
export const getSelectedAcademyId = (state: IBatteryState) => state.selectedAcademyId
export const getSelectedAcademy = (state: IBatteryState) => findAcademyById(getAcademy(state))(state.selectedAcademyId);
export const getSelectedAcademyDeviceId = (state: IBatteryState) => state.selectedAcademyId;
export const getSelectedAcademyDevice = (state: IBatteryState) => getSelectedAcademyId(state) ? getSelectedAcademy(state).devices : {}
