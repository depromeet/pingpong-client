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
