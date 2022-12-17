import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

interface ServerResponse<T = Record<string, unknown>> {
  data: T;
  message: string;
}

const useCategoriesQuery = () => {
  const fetchCategories = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<MainCategory[]>>(`/api/v1/categories/main`);
    return data;
  };

  return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
};

export default useCategoriesQuery;
