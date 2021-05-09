import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from 'services/client';
import { IRequestConfig } from 'services/types';



export const makeRequest = async <T>(parameters: IRequestConfig, endpoint: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        const { method, params = {} } = parameters;

       
        console.log(params)
        const queryParams = getParams(params);

        const config: AxiosRequestConfig = {
            method,
            url: `${endpoint}${queryParams}`,
        };

        axiosInstance(config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getParams = (params = {}) => {
    let queryParams = '';
    console.log(params)
    if (Object.keys(params).length > 0) {
        queryParams = `?${Object.entries(params).map(([key, value]) => {
            return `${key}=${value}`
        }).join('&')}`;
    }

    return queryParams;
}
