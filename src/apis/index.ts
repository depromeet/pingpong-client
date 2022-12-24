import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { formatQueryString } from 'src/lib/utils';

axios.defaults.baseURL = '/api/v1/';

const getAuth = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const cookie = document.cookie;
  const sessionForDev = sessionStorage.getItem('token');

  if (cookie) {
    //TODO: get cookie
    return { ...config, headers: { ...config.headers, Authorization: 'Bearer ' } };
  }

  if (sessionForDev) {
    return { ...config, headers: { ...config.headers, Authorization: `Bearer ${sessionForDev}` } };
  }

  return config;
};

const handleError = (_: AxiosError) => {
  //TODO: axios error handling
  return null;
};

// only for QUERY
export const queryFetcher = async (url: string, queries?: Record<string, unknown>) => {
  const newUrl = formatQueryString(url, queries);
  let config: AxiosRequestConfig = {
    method: 'GET',
    url: newUrl,
  };

  config = getAuth(config);

  try {
    const res = await axios(config);

    return res.data;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};

// only for MUTATE
export const mutateFetcher = async <T>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE',
  data?: T,
  params?: Record<string, unknown>,
): Promise<T | null> => {
  try {
    let config: AxiosRequestConfig = {
      method,
      data,
      url,
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    config = getAuth(config);

    const res = await axios(config);

    return res.data;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};

export const axiosRequest = async <T>(req: AxiosRequestConfig): Promise<AxiosResponse<T | null>> => {
  try {
    const config: AxiosRequestConfig = getAuth(req);

    const res = await axios(config);

    return res;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};

//TODO: remove this
export interface ServerResponse<T = Record<string, unknown>> {
  data: T;
  message: string;
}

const BASE_URL = 'https://test.pingpongg.shop';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});
