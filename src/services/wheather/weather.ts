import { makeRequest } from 'services/base';
import { Endpoints  } from 'services/wheather/endpoints';
import { IWeatherResponse } from 'services/wheather/types';

const getWheather = async (params: any) : Promise<IWeatherResponse> => {
    console.log(params)
    const response = await makeRequest<IWeatherResponse>({params, method: 'GET'}, Endpoints.ForeCast) ;
    return response ; 
}



const authService = {
    getWheather
}

export default authService;
