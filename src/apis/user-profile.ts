import { axiosRequest } from '@/apis';

export const updateUserProfile = async (image: File) => {
  const res = await axiosRequest({
    url: '/members/image',
    method: 'post',
    data: { image },
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return res;
};
