import { useMutation } from '@tanstack/react-query';

import type { ServerResponse } from '@/apis';
import { axiosClient } from '@/apis';

interface LikeInfo {
  likes: number;
}

const usePostLikeMutate = (postId: number) => {
  const updatePostLikeByPostId = async (postId: number): Promise<LikeInfo> => {
    const {
      data: { data },
    } = await axiosClient.post(`/.api/posts/${postId}/likes`, {});

    return data;
  };

  return useMutation({
    mutationFn: () => updatePostLikeByPostId(postId),
    // onMutate: (variables) => {
    // },
    // onError: (error, variables, context) => {
    // },
    // onSuccess: (data, variables, context) => {
    // },
  });
};

export default usePostLikeMutate;
