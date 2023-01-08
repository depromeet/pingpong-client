import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

const updateNickname = async (nickname: string) => {
  const { data } = await axiosClient.patch('/members/nickname', { nickname });

  return data;
};

const useNicknameMutate = () => {
  return useMutation({
    mutationFn: (nickname: string) => updateNickname(nickname),
  });
};

export default useNicknameMutate;
