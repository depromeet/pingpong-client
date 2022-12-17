import { useMutation } from '@tanstack/react-query';

import { mutateFetcher } from '@/apis';
import type { TalentRegisterInfoProps } from '@/store/components/types';

const useRegisterTalentPost = () => {
  const mutation = useMutation({
    mutationFn: (talentInfo: TalentRegisterInfoProps) => mutateFetcher('/posts', 'POST', JSON.stringify(talentInfo)),
  });
  return mutation;
};

export default useRegisterTalentPost;
