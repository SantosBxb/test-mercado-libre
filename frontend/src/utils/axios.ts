import axios from 'axios';
import { API_URL } from './constants';

/**
 * Creates and exports an instance of Axios pre-configured with a base URL.
 */
const axiosClient = axios.create({
  baseURL: API_URL,
});

export default axiosClient;
