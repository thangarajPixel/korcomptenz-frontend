import axios from "axios";
import https from "https";

const API_BASE_URL = "https://stage03-admin-korcomptenz.korcomptenz.com/api";

const TIMEOUT = 30000;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const https_client = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  httpsAgent,
});

// Add a request interceptor
https_client.interceptors.request.use(async (config) => {
  try {
    // config.headers['content-type'] = 'application/json';
    return config;
  } catch {
    // eslint no-console: "error"
    // console.error('Error in request interceptor:', error);
    return config;
  }
});

https_client.interceptors.response.use(
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

export default https_client;
