import { useMutation } from '@tanstack/react-query';

import { mutateFetcher } from '@/apis';

const useRegisterTalentPost = () => {
  const mutation = useMutation({
    mutationFn: (talentInfo: string) => mutateFetcher('/posts', 'POST', talentInfo),
  });
  return mutation;
};

export default useRegisterTalentPost;
