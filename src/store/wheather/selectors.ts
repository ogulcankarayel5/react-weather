import { createSelector } from 'reselect';
import { AppState } from 'store';


export const getWeather = (state: AppState) => state.wheather;

export const selectWeather = createSelector(
    getWeather,
    weather => weather.weather
)
export const selectLoadingWeather = createSelector(
    getWeather,
    weather => weather.loading
)
export const selectCurrentWeather = createSelector(
    selectWeather,
    weather => weather?.current
)

export const selectForecastWeather = createSelector(
    selectWeather,
    weather => weather?.forecast
)

export const selectLocationWeather = createSelector(
    selectWeather,
    weather => weather?.location
)