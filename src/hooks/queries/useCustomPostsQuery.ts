import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { CardInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

interface CustomPostsQueryParams {
  page: number;
  size: number;
}

interface CustomPostsData {
  content: CardInfo[];
}

const useCustomPostsQuery = (params: CustomPostsQueryParams) => {
  const { isLogin } = useAuth();

  const fetchCustomPosts = async ({ page, size }: CustomPostsQueryParams) => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<CustomPostsData>>(`/posts/custom`, {
      params: {
        page,
        size,
      },
    });
    return data;
  };

  return useQuery({ queryKey: ['user', params], queryFn: () => fetchCustomPosts({ ...params }), enabled: isLogin });
};

export default useCustomPostsQuery;
