import { useQuery } from '@tanstack/react-query';

import { queryFetcher } from '@/apis';
import type { UserInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

const useUserInfoQuery = () => {
  const { isLogin } = useAuth();

  return useQuery<UserInfo>(['userInfo'], () => queryFetcher('/members/me'), {
    enabled: isLogin,
  });
};

export default useUserInfoQuery;
