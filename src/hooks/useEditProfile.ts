import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import type { EditUserInfo } from '@/typings/common';

const updateProfile = async (profileInfo: EditUserInfo) => {
  const { data } = await axiosClient.put('/members', profileInfo);

  return data;
};

const useEditProfile = () => {
  return useMutation({
    mutationFn: (profileInfo: EditUserInfo) => updateProfile(profileInfo),
  });
};

export default useEditProfile;
