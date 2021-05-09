import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
const axiosInstance = axios.create({ baseURL: `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_API_KEY}&` });

export default axiosInstance;
