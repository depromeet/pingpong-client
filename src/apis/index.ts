import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export interface ServerResponse<T = Record<string, unknown>> {
  data: T;
  message: string;
}

export const axiosClient = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getDevTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem('token');
  // TODO: sessionForDev 실제로 사용되지 않는것 같아보임. 삭제 필요
  if (token) {
    return `Bearer ${token}`;
  }
};

const handleError = (_: AxiosError) => {
  //TODO: axios error handling
  return null;
};

// only for QUERY
// export const queryFetcher = async (url: string, queries?: Record<string, unknown>) => {
//   const newUrl = formatQueryString(url, queries);

// const token = getDevTokenFromSessionStorage();

//   try {
//     const res = await axios(config);

//     return res.data;
//   } catch (err) {
//     handleError(err as AxiosError);

//     throw err;
//   }
// };

// only for MUTATE
// export const mutateFetcher = async <T>(
//   url: string,
//   method: 'POST' | 'PUT' | 'DELETE' | 'PATCH',
//   data?: T,
//   params?: Record<string, unknown>,
// ): Promise<T | null> => {
//   try {
//     let config: AxiosRequestConfig = {
//       method,
//       data,
//       url,
//       params,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const res = await axios(config);

//     return res.data;
//   } catch (err) {
//     handleError(err as AxiosError);

//     throw err;
//   }
// };
