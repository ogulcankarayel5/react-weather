import { WEATHER_CLEAR_RESULT, WEATHER_FAILURE, WEATHER_REQUEST, WEATHER_SEARCH_REQUEST, WEATHER_SEARCH_SUCCESS, WEATHER_SUCCESS } from 'store/wheather/constants';
import { ISearchResponse, IWeatherResponse } from "services/wheather";



export interface IWeatherParams {
    q: string;
    aqi?: string;
    days?: number;

}
export interface WeatherState {
    loading: boolean
    weather: IWeatherResponse | null;
    searchLoading: boolean;
    searchResult: Array<ISearchResponse>;
    
}

export interface WeatherRequestAction {
    type: typeof WEATHER_REQUEST;
}

export interface WeatherSuccessAction {
    type: typeof WEATHER_SUCCESS;

    payload: any;
}

export interface WeatherFailureAction {
    type: typeof WEATHER_FAILURE;
}


export interface WeatherSearchRequestAction {
    type: typeof WEATHER_SEARCH_REQUEST
}
export interface WeatherSearchSuccessAction {
    type: typeof WEATHER_SEARCH_SUCCESS;
    payload: any;
}

export interface WeatherClearSearchResultAction {
    type: typeof WEATHER_CLEAR_RESULT
}

export type WeatherActionTypes =
    | WeatherRequestAction
    | WeatherSuccessAction
    | WeatherFailureAction
    | WeatherSearchRequestAction
    | WeatherSearchSuccessAction
    | WeatherClearSearchResultAction
