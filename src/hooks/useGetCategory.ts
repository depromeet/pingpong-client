import { useQuery } from '@tanstack/react-query';

import { queryFetcher } from '@/apis';

interface UseCategoryProps {
  sort: 'main' | 'mid' | 'sub';
  query?: 'mainCategoryId' | 'midCategoryId';
  categoryId?: number;
}

const useGetCategory = ({ sort, query, categoryId }: UseCategoryProps) => {
  const queries = query === 'mainCategoryId' ? { mainCategoryId: categoryId } : { midCategoryId: categoryId };

  // TODO: useQuery type 선언이 필요합니다.
  const results = useQuery({
    queryKey: [`${sort}`, `${query}`, `${categoryId}`],
    queryFn: () => queryFetcher(`/categories/${sort}`, queries),
  });

  return results;
};

export default useGetCategory;
