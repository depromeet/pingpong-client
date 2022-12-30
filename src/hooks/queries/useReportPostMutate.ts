import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

const useReportPostMutate = () => {
  const createReportByPostId = async ({ postId, content }: { postId: number; content: string }) => {
    const {
      data: { data },
    } = await axiosClient.post(`/reports/posts/${postId}`, {
      content,
    });

    return data;
  };

  return useMutation({
    mutationFn: ({ postId, content }: { postId: number; content: string }) => createReportByPostId({ postId, content }),
  });
};

export default useReportPostMutate;
