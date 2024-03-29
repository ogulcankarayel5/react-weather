
import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectCurrentWeather, selectForecastWeather, selectLoadingWeather, selectLocationWeather, selectSearchLoading, selectSearchResult, selectTodayWeather } from 'store/wheather';
import { UsEpaIndex } from 'types';



export const useWeather = () => {

    const loadingWeather = useSelector(selectLoadingWeather, shallowEqual);
    const currentWeather = useSelector(selectCurrentWeather, shallowEqual);
    const forecastWeather = useSelector(selectForecastWeather, shallowEqual);
    const locationWeather = useSelector(selectLocationWeather, shallowEqual);
    const todayWeather = useSelector(selectTodayWeather, shallowEqual);
    const searchLoading = useSelector(selectSearchLoading, shallowEqual);
    const searchResult = useSelector(selectSearchResult, shallowEqual);

    const renderUsIndexText = useMemo((): string => {
        let text: string = '';
        switch (currentWeather?.air_quality.us_epa_index) {
            case UsEpaIndex.Good:
                text = 'Good';
                break;
            case UsEpaIndex.Moderate:
                text = 'Moderate';
                break;
            case UsEpaIndex.UnhealthyForSensetive:
                text = 'Unhealthy For Sensetives';
                break;
            case UsEpaIndex.Unhealthy:
                text = 'Unhealthy';
                break;
            case UsEpaIndex.VeryUnhealthy:
                text = 'Very Unhealthy';
                break;
            case UsEpaIndex.Hazardous:
                text = 'Hazardous';
                break;
            default:
                break;
        }

        return text;

    }, [currentWeather?.air_quality.us_epa_index])


    return { currentWeather, forecastWeather, locationWeather, loadingWeather, todayWeather, searchLoading, searchResult, renderUsIndexText }
};