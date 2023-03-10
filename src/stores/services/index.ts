import { createApi } from '@reduxjs/toolkit/query/react';
import { FBConnectionInstance } from '../../api/index';

const axiosBaseQuery = () => async (axiosConfigs) => {
  const { body, ...configs } = axiosConfigs;

  try {
    const result = await FBConnectionInstance.request({
      ...configs,
      data: body,
    });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as any;

    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

const baseRtkApi = createApi({
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 15,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['user'],
});

export default baseRtkApi;
