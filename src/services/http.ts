import axios from 'axios';
import { APP_CONFIG } from '@/utils/app-config';

const API_BASE_URL = APP_CONFIG?.API_URL;

const TIMEOUT = 30000;

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

// Add a request interceptor
http.interceptors.request.use(
  async (config) => {
    try {
      if (!API_BASE_URL) {
        return Promise.reject({
          message: 'API URL is not configured',
          status: undefined,
        });
      }
      return config;
    } catch {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (!API_BASE_URL) {
      return Promise.reject({
        message: 'API URL is not configured',
        status: undefined,
      });
    }

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
    return Promise.reject(error?.response?.data || { status: undefined });
  },
);

export default http;
