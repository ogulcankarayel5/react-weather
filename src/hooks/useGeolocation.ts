import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import weatherActions from 'store/wheather/actions';


export const useGeolocation = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { longitude, latitude } = position.coords;
                dispatch(weatherActions.getCurrentWeather({ q: `${latitude},${longitude}`, aqi: 'yes', days: 3 }))

            }, (err) => {
                alert('You need to give permission to get your location')
            });


        }
        else {
            alert("Sorry Not available!");
        }
    }, [dispatch])
}