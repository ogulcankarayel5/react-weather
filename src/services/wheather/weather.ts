import { makeRequest } from 'services/base';
import { Endpoints } from 'services/wheather/endpoints';
import { ISearchResponse, IWeatherResponse } from 'services/wheather/types';
import { renameKey } from 'utils';


const replacements = { 'us-epa-index': 'us_epa_index', 'gb-defra-index': 'gb_defra_index' };

const getWeather = async (params: any): Promise<IWeatherResponse> => {
   
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


const search = async (params: any) : Promise<Array<ISearchResponse>> => {
    const response = await makeRequest<Array<ISearchResponse>>({params, method: 'GET'}, Endpoints.Search);
    return response;
}
const weatherService = {
    getWeather,
    search
}

export default weatherService;
