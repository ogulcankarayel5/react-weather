import { makeRequest } from 'services/base';
import { Endpoints } from 'services/wheather/endpoints';
import { IWeatherResponse, IAirQualityResponse } from 'services/wheather/types';
import { renameKey } from 'utils';


const replacements = { 'us-epa-index': 'us_epa_index', 'gb-defra-index': 'gb_defra_index' };

const getWheather = async (params: any): Promise<IWeatherResponse> => {

    const response = await makeRequest<IWeatherResponse>({ params, method: 'GET' }, Endpoints.ForeCast);
    const newObject = renameKey(response.current.air_quality, replacements)
    for (let key in response) {
        if (key === 'current') {
            for (let key1 in response[key]) {
                if (key1 === 'air_quality') {
                    response[key][key1] = newObject
                }

            }

        }
    }

    return response;
}


const authService = {
    getWheather
}

export default authService;
