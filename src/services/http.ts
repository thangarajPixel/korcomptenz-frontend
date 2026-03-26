import axios from 'axios';
import https from 'https';
import { APP_CONFIG } from '@/utils/app-config';

const API_BASE_URL = APP_CONFIG?.API_URL;

// Reduced from 30000 to 10000 for better production performance
const TIMEOUT = 10000;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  httpsAgent,
  decompress: true, // Enable decompression for gzip/brotli
  headers: {
    'Accept-Encoding': 'gzip, deflate, br', // Request compression
  },
});

// Add a request interceptor
http.interceptors.request.use(async (config) => {
  try {
    // config.headers['content-type'] = 'application/json';
    return config;
  } catch {
    // eslint no-console: "error"
    // console.error('Error in request interceptor:', error);
    return config;
  }
});

// Add retry logic for timeouts
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    // Retry once on timeout
    if (
      error.code === 'ECONNABORTED' &&
      !error.config.__retryCount
    ) {
      error.config.__retryCount = 1;
      return http(error.config);
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
    return Promise.reject(error?.response?.data);
  },
);

export default http;
