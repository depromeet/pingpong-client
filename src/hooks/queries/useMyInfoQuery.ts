import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { queryFetcher } from '@/apis';
import { myInfoAtom } from '@/store/components';
import type { UserInfo } from '@/typings/common';

export const useMyInfoQuery = () => {
  return useQuery<UserInfo>(['myinfo'], () => queryFetcher('/me'));
};

export const useMyInfo = () => {
  const { data } = useMyInfoQuery();

  const [myInfo, setMyInfo] = useRecoilState<UserInfo | null>(myInfoAtom);

  useEffect(() => {
    setMyInfo(data ?? null);
  }, [data, setMyInfo]);

  return { myInfo };
};
