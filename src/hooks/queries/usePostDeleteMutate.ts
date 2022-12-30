import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

const usePostDeleteMutate = (postId: number) => {
  const deletePost = async (postId: number) => {
    const {
      data: { data },
    } = await axiosClient.delete(`/posts/${postId}`);

    return data;
  };

  return useMutation({
    mutationFn: () => deletePost(postId),
  });
};

export default usePostDeleteMutate;
