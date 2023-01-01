import { useQuery } from '@tanstack/react-query';

import { queryFetcher } from '@/apis';
import type { UserInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

const useMyInfoQuery = () => {
  const { isLogin } = useAuth();

  return useQuery<UserInfo>(['myinfo'], () => queryFetcher('/members/me'), {
    enabled: isLogin,
  });
};

export default useMyInfoQuery;
