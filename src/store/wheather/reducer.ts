import { WheatherState, WheatherActionTypes } from "store/wheather/types";

const initialState: WheatherState = {};

export function weatherReducer(
  state = initialState,
  action: WheatherActionTypes
): WheatherState {
  switch (action.type) {
    default:
      return state;
  }
}
