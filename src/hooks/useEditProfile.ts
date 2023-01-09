import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { axiosClient } from '@/apis';
import type { EditUserInfo } from '@/typings/common';

import { useToast } from './useToast';

const updateProfile = async (profileInfo: EditUserInfo) => {
  const { data } = await axiosClient.put('/members', profileInfo);

  return data;
};

const useEditProfile = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setToast } = useToast();

  const handleSuccess = () => {
    setToast('프로필이 저장되었어요.');
    queryClient.invalidateQueries(['userInfo']);
    router.replace('/profile');
  };

  return useMutation({
    mutationFn: (profileInfo: EditUserInfo) => updateProfile(profileInfo),
    onSuccess: handleSuccess,
  });
};

export default useEditProfile;
