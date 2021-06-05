import { Dispatch } from 'redux';
import { ISearchResponse, IWeatherResponse } from 'services/wheather';
import weatherService from 'services/wheather/weather';
import { IWeatherParams, WeatherActionTypes } from 'store/wheather/types';
import { WEATHER_CLEAR_RESULT, WEATHER_FAILURE, WEATHER_REQUEST, WEATHER_SEARCH_REQUEST, WEATHER_SEARCH_SUCCESS, WEATHER_SUCCESS } from 'store/wheather/constants';


export const weatherRequest = (): WeatherActionTypes => {
    return {
        type: WEATHER_REQUEST
    }
}

export const weatherSuccess = (data: IWeatherResponse): WeatherActionTypes => {
    return {
        type: WEATHER_SUCCESS,
        payload: data
    }
}

export const weatherFailure = (): WeatherActionTypes => {
    return {
        type: WEATHER_FAILURE
    }
}



export const weatherSearchRequest = (): WeatherActionTypes => {
    return {
        type: WEATHER_SEARCH_REQUEST
    }
}


export const weatherSearchSuccess = (data: Array<ISearchResponse>): WeatherActionTypes => {
    return {
        type: WEATHER_SEARCH_SUCCESS,
        payload: data
    }
}

export const clearSearchResult = () : WeatherActionTypes => {
    return {
        type: WEATHER_CLEAR_RESULT
    }
}

export const getCurrentWeather = (params: IWeatherParams) => async (dispatch: Dispatch<WeatherActionTypes>) => {

    try {
        dispatch(weatherRequest())

        const data = await weatherService.getWeather(params)
        dispatch(weatherSuccess(data))
    }

    catch (err) {
        console.log(err)
    }
}

export const search = (params: IWeatherParams) => async (dispatch: Dispatch<WeatherActionTypes>) => {

    try {
        const data = await weatherService.search(params);
        console.log(data)
        dispatch(weatherSearchSuccess(data));
    }
    catch(err) {
        console.log(err)
    }
}

const weatherActions = {
    getCurrentWeather,
    search,
    clearSearchResult,
    weatherSearchRequest
}

export default weatherActions;

