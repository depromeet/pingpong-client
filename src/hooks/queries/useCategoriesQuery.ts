import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import type { MainCategory, MidCategory, SubCategory } from '@/typings/common';

interface ServerResponse<T = Record<string, unknown>> {
  data: T;
  message: string;
}

const useCategoriesQuery = ({
  mainCategoryId = 0,
  midCategoryId = 0,
}: {
  mainCategoryId?: number;
  midCategoryId?: number;
}) => {
  const fetchMainMidCategories = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<MainCategory[]>>(`/categories/main`);
    return data;
  };

  const fetchMidCategoriesByMainCategoryId = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<MidCategory[]>>(`/categories/mid`, {
      params: { mainCategoryId },
    });

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

  const midCategoryQuery = useQuery({
    queryKey: ['midCategories', mainCategoryId],
    queryFn: fetchMidCategoriesByMainCategoryId,
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
    midCategoryQuery,
    subCategoryQuery,
  };
};

export default useCategoriesQuery;
