import { IWeatherResponse } from "services/wheather";
import { WHEATHER_REQUEST, WHEATHER_SUCCESS, WHEATHER_FAILURE } from "store/wheather/constants";

export interface WheatherState {
    loading: boolean
    weather: IWeatherResponse | null
}

export interface WheatherRequestAction {
    type: typeof WHEATHER_REQUEST;
}

export interface WheatherSuccessAction {
    type: typeof WHEATHER_SUCCESS;

    payload: any;
}

export interface WheatherFailureAction {
    type: typeof WHEATHER_FAILURE;
}


export type WheatherActionTypes =
    | WheatherRequestAction
    | WheatherSuccessAction
    | WheatherFailureAction
