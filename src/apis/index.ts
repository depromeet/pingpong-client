import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { formatQueryString } from 'src/lib/utils';

//FIXME: to proxy
axios.defaults.baseURL = 'https://www.pingpongg.shop:8080/api/v1';

const handleError = (_: AxiosError) => {
  //TODO: axios error handling
  return null;
};

// only for QUERY
export const queryFetcher = async (url: string, queries?: Record<string, unknown>) => {
  const newUrl = formatQueryString(url, queries);
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: newUrl,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLstZzsmIHqtowiLCJtZW1iZXJJZCI6NSwiZXhwIjoxNjcwNDIyMjEwfQ.VekC3NKcgpQMGVIB6wO6kyTNRRHOESBV1nbfdEih2Dp009EM3OMm8xi-DdpUcAm3W7z8HlGrwA67DSE8t0k28Q',
    },
  };

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
