import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

const FBConnectionInstance = axios.create({
  timeout: 20000,
  baseURL: process.env.REACT_APP_BASE_API,
});

FBConnectionInstance.interceptors.request.use((config) => {
  if (config.data) {
    return { ...config, data: config.data };
  }

  return config;
});

FBConnectionInstance.interceptors.response.use(
  (response) => ({
    ...response,
    data: response.data,
  }),
  (error) => {
    return Promise.reject(error);
  },
);

export const setToken = (token: string) => {
  if (!FBConnectionInstance.defaults.headers.Authorization) {
    FBConnectionInstance.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

export const clearToken = () => {
  if (FBConnectionInstance.defaults.headers.Authorization) {
    delete FBConnectionInstance.defaults.headers.Authorization;
  }
};

export { FBConnectionInstance };
