import { useMutation } from '@tanstack/react-query';

import { mutateFetcher } from '@/apis';

const useNicknameMutate = () => {
  return useMutation((nickname: string) => mutateFetcher('/members/nickname', 'PATCH', { nickname: nickname }));
};

export default useNicknameMutate;
