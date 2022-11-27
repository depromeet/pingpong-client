import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { formatQueryString } from 'src/lib/utils';

axios.defaults.baseURL = 'https://zoo-animal-api.herokuapp.com';

const handleError = (_: AxiosError) => {
  //TODO: axios error handling
  return null;
};

// only for QUERY
export const queryFetcher = async (url: string, queries?: Record<string, unknown>) => {
  const newUrl = formatQueryString(url, queries);
  const config: AxiosRequestConfig = { method: 'GET', url: newUrl };

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
  params?: Record<string, unknown>,
): Promise<T | null> => {
  try {
    const res = await axios({ url, method, params });

    return res.data;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};

export const request = async <T>(req: AxiosRequestConfig): Promise<AxiosResponse<T | null>> => {
  try {
    const res = await axios(req);

    return res;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};
