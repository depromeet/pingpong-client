import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';
import { myInfoAtom } from '@/store/components';
import type { UserInfo } from '@/typings/common';

import { useAuth } from '../useAuth';

const useUserInfoQuery = () => {
  const { isLogin } = useAuth();
  const setUserInfo = useSetRecoilState(myInfoAtom);

  const fetchUserInfo = async () => {
    const {
      data: { data },
    } = await axiosClient.get<ServerResponse<UserInfo>>(`/members/me`);
    return data;
  };

  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    enabled: isLogin,
    onSuccess: (data) => setUserInfo(data),
  });
};

export default useUserInfoQuery;
