import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { UserInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

const useUserInfoQuery = () => {
  const { isLogin } = useAuth();

  const fetchUserInfo = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<UserInfo>>(`/members/1`);
    return data;
  };

  return useQuery({ queryKey: ['user'], queryFn: fetchUserInfo, enabled: isLogin });
};

export default useUserInfoQuery;
