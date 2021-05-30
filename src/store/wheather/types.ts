import { IWeatherResponse } from "services/wheather";
import { WHEATHER_REQUEST, WHEATHER_SUCCESS, WHEATHER_FAILURE, WHEATHER_LOCATION_SUCCESS } from "store/wheather/constants";


export interface IWeatherParams {
    q: string;
    aqi: string;
    days: number;

}
export interface IWeatherLocation {
    latitude: number;
    longitude: number;
}

export interface WheatherState {
    loading: boolean
    weather: IWeatherResponse | null;
    location: IWeatherLocation;
    
}

export interface WheatherRequestAction {
    type: typeof WHEATHER_REQUEST;
}

export interface WheatherSuccessAction {
    type: typeof WHEATHER_SUCCESS;

    payload: any;
}

export interface WheatherLocationSuccessAction {
    type: typeof WHEATHER_LOCATION_SUCCESS;
    payload: any;
}

export interface WheatherFailureAction {
    type: typeof WHEATHER_FAILURE;
}


export type WheatherActionTypes =
    | WheatherRequestAction
    | WheatherSuccessAction
    | WheatherFailureAction
    | WheatherLocationSuccessAction
