import { makeRequest } from 'services/base';
import { Endpoints  } from 'services/wheather/endpoints';

const getCurrentWheather = async (params: any) : Promise<void> => {
    console.log(params)
    const response = await makeRequest<any>({params, method: 'GET'}, Endpoints.Current) ;
    return response ; 
}



const authService = {
    getCurrentWheather
}

export default authService;
