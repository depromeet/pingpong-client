import { useQuery } from '@tanstack/react-query';

import { queryFetcher } from '@/apis';
import type { UserInfo } from '@/typings/common';

const useUserInfoQuery = (memberId?: number) => {
  const ret = useQuery<{ data: UserInfo }>(['members'], () => queryFetcher(`/members/${memberId}`), {
    enabled: memberId !== undefined,
  });

  return { data: ret.data?.data, isSuccess: ret.isSuccess };
};
export default useUserInfoQuery;
