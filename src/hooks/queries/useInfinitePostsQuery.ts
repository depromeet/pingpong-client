import type { QueryFunctionContext } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import type { CardInfo } from '@/typings/common';
import type { CategoryFilterParams } from '@/typings/main';

interface PageParam {
  totalElements: number;
  totalPages: number;
  hasNextPages: boolean;
  pageNumber: number;
}

interface PostParams extends CategoryFilterParams {
  pageParam: number;
}

interface InfinitePost extends PageParam {
  content: CardInfo[];
}

const PAGE_SIZE = 3;
const DEFAULT_PAGE = 0;

const useInfinitePostsQuery = (params: CategoryFilterParams) => {
  const fetchPosts = async ({
    isShare = false,
    mainCategory,
    midCategory,
    subCategory,
    pageParam = DEFAULT_PAGE,
  }: PostParams): Promise<InfinitePost> => {
    const {
      data: { data },
    } = await axiosClient.get('/posts', {
      params: {
        isShare,
        mainCategory,
        midCategory,
        subCategory,
        page: pageParam,
        size: PAGE_SIZE,
      },
    });

    return data;
  };

  const { data, fetchNextPage, isSuccess, isLoading, isError, refetch } = useInfiniteQuery({
    queryKey: ['infinitePosts', params],
    queryFn: ({ pageParam }) => fetchPosts({ ...params, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.pageNumber >= lastPage.totalPages) return false;
      return lastPage.pageNumber + 1;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage.pageNumber <= 0) return false;
      return firstPage.pageNumber - 1;
    },
  });

  const posts = data?.pages.flatMap((page) => page.content) ?? [];

  return {
    posts,
    fetchNextPage,
    isSuccess,
    isLoading,
    isError,
    refetch,
  };
};

export default useInfinitePostsQuery;
