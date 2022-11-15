import type { QueryFunctionContext } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface PageParam {
  totalElements: number;
  totalPages: number;
  hasNextPages: boolean;
  page: number;
}

interface InfinitePost extends PageParam {
  content: Card[];
}

const PAGE_SIZE = 3;
const DEFAULT_PAGE = 0;

const useInfinitePosts = () => {
  const fetchPosts = async ({ pageParam = DEFAULT_PAGE }: QueryFunctionContext): Promise<InfinitePost> => {
    const axiosClient = axios.create({
      baseURL: 'https://www.pingpongg.shop:8080',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN07JqpIO2GoO2BsCIsIm1lbWJlcklkIjoxLCJleHAiOjYwOTgyNDU3MDA2MX0.gzAYnYOpnp93B-akfG4-bC09UH6ZAuJU62eYt8gFIIXtCSCMK_j_sPHElldlwVUlZu8b9ZtB4B4Lu6OyIeSe8w',
      },
    });

    const { data } = await axiosClient.get('/api/v1/posts', {
      params: {
        isShare: false,
        page: pageParam,
        size: PAGE_SIZE,
      },
    });

    return data;
  };

  const { data } = useInfiniteQuery({
    queryKey: ['infinitePosts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) return false;
      return lastPage.page + 1;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage.page <= 0) return false;
      return firstPage.page - 1;
    },
  });

  const posts = data?.pages.flatMap((page) => page.content) ?? [];

  return {
    posts,
  };
};

export default useInfinitePosts;
