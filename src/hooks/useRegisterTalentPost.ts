/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';

import { mutateFetcher } from '@/apis';

const useRegisterTalentPost = () => {
  //* TODO: Mutation type 정의 필요
  const mutation = useMutation<any>({
    mutationFn: (talentInfo) => mutateFetcher('/posts', 'POST', JSON.stringify(talentInfo)),
  });
  return mutation;
};

export default useRegisterTalentPost;
