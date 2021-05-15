import { WHEATHER_REQUEST, WHEATHER_SUCCESS } from './constants';
import { WheatherState, WheatherActionTypes } from "store/wheather/types";

const initialState: WheatherState = {
  loading: true,
  weather: null
};

export function weatherReducer(
  state = initialState,
  action: WheatherActionTypes
): WheatherState {
  switch (action.type) {
    case WHEATHER_REQUEST:
      return {
        ...state,
        loading:true,
      }
    case WHEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
