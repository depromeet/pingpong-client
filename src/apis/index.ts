import type { QueryFunctionContext } from '@tanstack/react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { formatQueryString } from 'src/lib/utils';

axios.defaults.baseURL = 'https://zoo-animal-api.herokuapp.com';

const handleError = (err: AxiosError) => {
  //TODO: axios error handling
  return null;
};

// only for GET
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

export const request = async <T>(req: AxiosRequestConfig): Promise<T | null> => {
  try {
    const res = await axios(req);
    return res.data;
  } catch (err) {
    handleError(err as AxiosError);

    throw err;
  }
};
