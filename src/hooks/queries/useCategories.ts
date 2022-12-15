import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://test.pingpongg.shop',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

interface ServerResponse<T = Record<string, unknown>> {
  data: T;
  message: string;
}

const useCategories = () => {
  const fetchCategories = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<MainCategory[]>>(`/api/v1/categories/main`);
    return data;
  };

  return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
};

export default useCategories;
