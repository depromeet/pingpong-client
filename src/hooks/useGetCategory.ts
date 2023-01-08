import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';

interface UseCategoryProps {
  sort: 'main' | 'mid' | 'sub';
  type?: 'mainCategoryId' | 'midCategoryId';
  categoryId?: number;
}

const fetchCategoriesByMainCategoryId = async ({ mainCategoryId = 1 }: { mainCategoryId?: number }) => {
  const { data: data } = await axiosClient.get<ServerResponse<MainCategoryInfo[]>>(`/categories/mid`, {
    params: { mainCategoryId },
  });

  return data;
};

const fetchCategoriesByMidCategoryId = async ({ midCategoryId = 1 }: { midCategoryId?: number }) => {
  const { data: data } = await axiosClient.get<ServerResponse<MainCategoryInfo[]>>(`/categories/sub`, {
    params: { midCategoryId },
  });

  return data;
};

const useGetCategory = ({ sort, type, categoryId = 1 }: UseCategoryProps) => {
  const isSortMain = sort === 'main';
  const queryFn = isSortMain ? fetchCategoriesByMainCategoryId : fetchCategoriesByMidCategoryId;
  const params = isSortMain ? { mainCategoryId: categoryId } : { midCategoryId: categoryId };

  return useQuery({
    queryKey: [`${sort}`, `${type}`, `${categoryId}`],
    queryFn: () => queryFn(params),
  });
};

export default useGetCategory;
