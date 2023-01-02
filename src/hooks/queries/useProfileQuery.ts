import { useQuery } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import type { UserInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

const useProfileQuery = (memberId: number) => {
  const { isLogin } = useAuth();

  const fetchProfileInfo = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<UserInfo>>(`/members/${memberId}`);
    return data;
  };

  return useQuery({ queryKey: ['profileInfo', memberId], queryFn: fetchProfileInfo, enabled: isLogin });
};

export default useProfileQuery;
