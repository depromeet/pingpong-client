import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { CardInfo } from '@/typings/common';

interface CustomPostsQueryParams {
  subCategoryId: number;
  page: number;
  size: number;
}

interface CustomPostsData {
  content: CardInfo[];
}

const useCustomPostsQuery = (params: CustomPostsQueryParams) => {
  const fetchCustomPosts = async ({ subCategoryId, page, size }: CustomPostsQueryParams) => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<CustomPostsData>>(`/api/v1/posts/custom`, {
      params: {
        subCategoryId,
        page,
        size,
      },
    });
    return data;
  };

  return useQuery({ queryKey: ['user', params], queryFn: () => fetchCustomPosts({ ...params }) });
};

export default useCustomPostsQuery;
