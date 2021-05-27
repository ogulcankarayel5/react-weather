import { Dispatch } from 'redux';
import { makeRequest } from 'services/base';
import { IWeatherResponse } from 'services/wheather';
import authService from 'services/wheather/weather';
import { WheatherActionTypes } from 'store/wheather/types';
import { WHEATHER_FAILURE, WHEATHER_REQUEST, WHEATHER_SUCCESS } from './constants';


export const weatherRequest = (): WheatherActionTypes => {
    return {
        type: WHEATHER_REQUEST
    }
}

export const weatherSuccess = (data: IWeatherResponse) : WheatherActionTypes => {
    return {
        type: WHEATHER_SUCCESS,
        payload: data
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

        const data = await authService.getWheather({q: 'bursa', days:3, aqi: 'yes'})
        
        dispatch(weatherSuccess(data))
    }

    catch(err) {
        console.log(err)
    }
}