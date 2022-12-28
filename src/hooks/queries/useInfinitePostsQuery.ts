import type { QueryFunctionContext } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import type { CardInfo } from '@/typings/common';
import type { CategoryFilterParams } from '@/typings/main';

import { useAuth } from '../useAuth';

interface PageParam {
  totalElements: number;
  totalPages: number;
  hasNextPages: boolean;
  pageNumber: number;
}

interface InfinitePost extends PageParam {
  content: CardInfo[];
}

const PAGE_SIZE = 3;
const DEFAULT_PAGE = 0;

const useInfinitePostsQuery = (params: CategoryFilterParams) => {
  const { isLogin } = useAuth();

  const fetchPosts = async ({ pageParam = DEFAULT_PAGE }: QueryFunctionContext): Promise<InfinitePost> => {
    const {
      data: { data },
    } = await axiosClient.get('/posts', {
      params: {
        isShare: false,
        page: pageParam,
        size: PAGE_SIZE,
      },
    });

    return data;
  };

  const { data, fetchNextPage, isSuccess, isLoading, isError } = useInfiniteQuery({
    queryKey: ['infinitePosts', params],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => {
      if (lastPage.pageNumber >= lastPage.totalPages) return false;
      return lastPage.pageNumber + 1;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage.pageNumber <= 0) return false;
      return firstPage.pageNumber - 1;
    },
    enabled: isLogin,
  });

  const posts = data?.pages.flatMap((page) => page.content) ?? [];

  return {
    posts,
    fetchNextPage,
    isSuccess,
    isLoading,
    isError,
  };
};

export default useInfinitePostsQuery;
