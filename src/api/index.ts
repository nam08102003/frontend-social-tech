import axios from 'axios';
import { store } from '../stores';
import { commonActions } from '../stores/slices/common';

const FBConnectionInstance = axios.create({
  timeout: 20000,
  baseURL: '/api',
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
    const message = error.response?.data?.error?.message || error?.message;

    store.dispatch(
      commonActions.showAlertMessage({
        type: 'error',
        message,
      }),
    );

    return Promise.reject(error);
  },
);

export default FBConnectionInstance;
