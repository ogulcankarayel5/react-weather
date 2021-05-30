import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentWeather } from 'store/wheather';


export const useGeolocation = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { longitude, latitude } = position.coords;
                dispatch(getCurrentWeather({ q: `${latitude},${longitude}`, aqi: 'yes', days: 3 }))

            }, (err) => {
                alert('You need to give permission to get your location')
            });


        }
        else {
            alert("Sorry Not available!");
        }
    }, [dispatch])
}