import { Dispatch } from 'redux';
import { IWeatherResponse } from 'services/wheather';
import weatherService from 'services/wheather/weather';
import authService from 'services/wheather/weather';
import { IWeatherLocation, IWeatherParams, WheatherActionTypes } from 'store/wheather/types';
import { WHEATHER_FAILURE, WHEATHER_LOCATION_SUCCESS, WHEATHER_REQUEST, WHEATHER_SUCCESS } from './constants';


export const weatherRequest = (): WheatherActionTypes => {
    return {
        type: WHEATHER_REQUEST
    }
}

export const weatherSuccess = (data: IWeatherResponse): WheatherActionTypes => {
    return {
        type: WHEATHER_SUCCESS,
        payload: data
    }
}

export const weatherLocationSuccess = (data: IWeatherLocation): WheatherActionTypes => {
    return {
        type: WHEATHER_LOCATION_SUCCESS,
        payload: data
    }
}

export const weatherFailure = (): WheatherActionTypes => {
    return {
        type: WHEATHER_FAILURE
    }
}

export const getCurrentWeather = (params: IWeatherParams) => async (dispatch: Dispatch<WheatherActionTypes>) => {

    try {
        dispatch(weatherRequest())

        const data = await weatherService.getWheather(params)
        dispatch(weatherSuccess(data))
    }

    catch (err) {
        console.log(err)
    }
}

export const getLocation = () => async (dispatch: Dispatch<any>) => {

    try {
        dispatch(weatherRequest())
        if (navigator.geolocation) {
            const result = await navigator.permissions.query({ name: 'geolocation' });
            if (result.state === 'granted') {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { longitude, latitude } = position.coords;
                    dispatch(getCurrentWeather({ q: `${latitude},${longitude}`, aqi: 'yes', days: 3 }))

                });
            }

        }
    }
    catch (err) {
        console.log(err)
    }
}