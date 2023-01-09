/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import type { PostRegisterInfo } from '@/typings/common';

const createdTalentPost = async (talentInfo: PostRegisterInfo) => {
  const { data } = await axiosClient.post('/posts', talentInfo);

  return data;
};

const useRegisterTalentPost = () => {
  return useMutation({
    mutationFn: (talentInfo: PostRegisterInfo) => createdTalentPost(talentInfo),
  });
};

export default useRegisterTalentPost;
