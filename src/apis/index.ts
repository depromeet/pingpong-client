import type { QueryFunctionContext } from '@tanstack/react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { formatQueryString } from 'src/lib/utils';

axios.defaults.baseURL = 'https://zoo-animal-api.herokuapp.com';

const handleError = (err: AxiosError) => {
  //TODO: axios error handling
  return null;
};

// use for Query
export const queryFn = async ({ queryKey }: QueryFunctionContext) => {
  if (!queryKey) return;

  const url = formatQueryString(queryKey);
  const config: AxiosRequestConfig = { method: 'GET', url };

  try {
    const res = await axios(config);

    return res.data;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};

//use for Mutation
type Method = 'POST' | 'PUT' | 'DELETE';

export const mutationFn = async (url: string, method: Method, params?: Record<string, unknown> | FormData | null) => {
  const axiosConfig: AxiosRequestConfig = {
    method,
    url,
  };

  if (params) {
    axiosConfig.data = params;
  }

  try {
    const res = await axios(axiosConfig);

    return res.data;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};
