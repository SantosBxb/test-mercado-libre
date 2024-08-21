import axios, { AxiosInstance } from 'axios';
import enviroments from './enviroments';

/**
 * Creates an Axios instance pre-configured with the Mercado Libre API base URL
 * and default headers.
 * @type {AxiosInstance}
 */
const meliClient: AxiosInstance = axios.create({
  baseURL: enviroments.meliAPI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default meliClient;
