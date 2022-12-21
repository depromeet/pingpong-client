import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

interface LikeInfo {
  likes: number;
}

const usePostUnlikeMutate = (postId: number) => {
  const updatePostUnlikeByPostId = async (postId: number): Promise<LikeInfo> => {
    const {
      data: { data },
    } = await axiosClient.post(`api/v1/posts/${postId}/unlikes`, {});

    return data;
  };

  return useMutation({
    mutationFn: () => updatePostUnlikeByPostId(postId),
    // onMutate: (variables) => {
    // },
    // onError: (error, variables, context) => {
    // },
    // onSuccess: (data, variables, context) => {
    // },
  });
};

export default usePostUnlikeMutate;
