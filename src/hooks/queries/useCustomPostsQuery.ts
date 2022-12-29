import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { CardInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

interface CustomPostsQueryParams {
  subCategoryId: number;
  page: number;
  size: number;
}

interface CustomPostsData {
  content: CardInfo[];
}

const useCustomPostsQuery = (params: CustomPostsQueryParams) => {
  const { isLogin } = useAuth();

  const fetchCustomPosts = async ({ subCategoryId, page, size }: CustomPostsQueryParams) => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<CustomPostsData>>(`/.api/posts/custom`, {
      params: {
        subCategoryId,
        page,
        size,
      },
    });
    return data;
  };

  return useQuery({ queryKey: ['user', params], queryFn: () => fetchCustomPosts({ ...params }), enabled: isLogin });
};

export default useCustomPostsQuery;
