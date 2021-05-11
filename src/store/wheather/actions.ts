import { Dispatch } from 'redux';
import { makeRequest } from 'services/base';
import authService from 'services/wheather';
import { WheatherActionTypes } from 'store/wheather/types';
import { WHEATHER_FAILURE, WHEATHER_REQUEST, WHEATHER_SUCCESS } from './constants';


export const weatherRequest = (): WheatherActionTypes => {
    return {
        type: WHEATHER_REQUEST
    }
}

export const weatherSuccess = () : WheatherActionTypes => {
    return {
        type: WHEATHER_SUCCESS,
        payload: 'weather'
    }
}

export const weatherFailure = (): WheatherActionTypes => {
    return {
        type: WHEATHER_FAILURE
    }
}

export const getCurrentWeather = () => async (dispatch: Dispatch<WheatherActionTypes>) => {

    try {
        dispatch(weatherRequest())

        const data = await authService.getCurrentWheather({q: 'London', aqi: 'no'})
        console.log(data)
    }

    catch {

    }
}