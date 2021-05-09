import { makeRequest } from 'services/base';
import { Endpoints  } from 'services/wheather/endpoints';

export const getCurrentWheather = (params: any) : any => {

    makeRequest<any>(params, Endpoints.deneme)
}