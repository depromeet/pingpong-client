import { useQuery } from '@tanstack/react-query';

import { queryFetcher } from '@/apis';
import type { UserInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

const useUserInfoQuery = (memberId?: number) => {
  const { isLogin } = useAuth();

  return useQuery<UserInfo>(['members'], () => queryFetcher(`/members/${memberId}`), {
    enabled: isLogin && memberId !== undefined,
  });
};
export default useUserInfoQuery;
