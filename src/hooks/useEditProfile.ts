import { useMutation } from '@tanstack/react-query';

import { mutateFetcher } from '@/apis';
import type { EditUserInfo } from '@/typings/common';

const useEditProfile = () => {
  const mutation = useMutation({
    mutationFn: (profileInfo: EditUserInfo) => mutateFetcher('/members', 'PUT', JSON.stringify(profileInfo)),
  });
  return mutation;
};

export default useEditProfile;
