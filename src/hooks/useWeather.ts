  
import { useCallback, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectCurrentWeather, selectForecastWeather, selectLoadingWeather, selectLocationWeather } from 'store/wheather';



export const useWeather = () => {
    
    const loadingWeather = useSelector(selectLoadingWeather, shallowEqual);
    const currentWeather = useSelector(selectCurrentWeather, shallowEqual);
    const forecastWeather = useSelector(selectForecastWeather, shallowEqual);
    const locationWeather = useSelector(selectLocationWeather,shallowEqual);

    return {currentWeather, forecastWeather, locationWeather, loadingWeather}
};