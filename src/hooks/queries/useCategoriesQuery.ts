import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import type { MainCategory, SubCategory } from '@/typings/main';

interface ServerResponse<T = Record<string, unknown>> {
  data: T;
  message: string;
}

const useCategoriesQuery = (midCategoryId?: number) => {
  const fetchMainMidCategories = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<MainCategory[]>>(`/categories/main`);
    return data;
  };

  const fetchSubCategoriesByMidCategoryId = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<SubCategory[]>>(`/categories/sub`, {
      params: {
        midCategoryId,
      },
    });
    return data;
  };

  const mainMidCategoryQuery = useQuery({
    queryKey: ['mainMidCategories'],
    queryFn: fetchMainMidCategories,
    initialData: [],
  });

  const subCategoryQuery = useQuery({
    queryKey: ['subCategories', midCategoryId],
    queryFn: fetchSubCategoriesByMidCategoryId,
    select: (list) =>
      list.map((item) => {
        return { id: item.id, label: item.name };
      }),
    initialData: [],
  });

  return {
    mainMidCategoryQuery,
    subCategoryQuery,
  };
};

export default useCategoriesQuery;
