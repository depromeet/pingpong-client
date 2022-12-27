import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { PostInfo } from '@/typings/common';

const usePostQuery = (id: number) => {
  const fetchPostById = async (id: number) => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<PostInfo>>(`/posts/${id}`);
    return data;
  };

  //TODO: 반복되는 useQuery + option -> queryFetcher 합치기
  return useQuery({
    queryKey: ['post', { id }],
    queryFn: () => fetchPostById(id),
    enabled: Boolean(id),
    retry: 2,
  });
};

export default usePostQuery;
