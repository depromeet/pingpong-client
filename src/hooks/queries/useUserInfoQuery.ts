import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { UserInfo } from '@/typings/common';

const useUserInfoQuery = () => {
  const fetchUserInfo = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<UserInfo>>(`/members/1`);
    return data;
  };

  return useQuery({ queryKey: ['user'], queryFn: fetchUserInfo });
};

export default useUserInfoQuery;
