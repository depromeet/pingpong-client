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
    } = await axiosClient.get<ServerResponse<UserInfo>>(`/members/me`);
    return data;
  };

  return useQuery({ queryKey: ['userInfo'], queryFn: fetchUserInfo, enabled: !isLogin });
};

export default useUserInfoQuery;
