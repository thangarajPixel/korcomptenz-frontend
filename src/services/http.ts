import axios from 'axios';
import { APP_CONFIG } from '@/utils/app-config';

const API_BASE_URL = APP_CONFIG?.API_URL;

const TIMEOUT = 30000;

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

// Add a request interceptor
http.interceptors.request.use(async (config) => {
  try {
    return config;
  } catch {
    // eslint no-console: "error"
    // console.error('Error in request interceptor:', error);
    return config;
  }
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error) {
      const errorData = {
        ...error?.response?.data,
        status: error?.response?.status,
      };

      if (error?.response?.status === 400) {
        return Promise.reject(error?.response.data);
      }

      if (error?.response?.status === 401) {
        return Promise.reject(error?.response.data);
      }
      if (error?.response?.status === 403) {
        return Promise.reject(error?.response.data);
      }

      if (error.response?.status === 500) {
        // Internal Server Error
        return Promise.reject(error?.response.data);
      }
      return Promise.reject(errorData);
    }
    return Promise.reject(error?.response?.data);
  },
);

export default http;
