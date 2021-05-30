import { WHEATHER_LOCATION_SUCCESS, WHEATHER_REQUEST, WHEATHER_SUCCESS } from './constants';
import { WheatherState, WheatherActionTypes } from "store/wheather/types";

const initialState: WheatherState = {
  loading: true,
  weather: null,
  location: {
    latitude: 0,
    longitude: 0
  }
};

export function weatherReducer(
  state = initialState,
  action: WheatherActionTypes
): WheatherState {
  switch (action.type) {
    case WHEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case WHEATHER_SUCCESS:
    case WHEATHER_LOCATION_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
