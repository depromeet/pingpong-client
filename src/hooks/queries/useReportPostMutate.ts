import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

const useReportPostMutate = ({ postId, content }: { postId: number; content: string }) => {
  const createReportByPostId = async ({ postId, content }: { postId: number; content: string }) => {
    const {
      data: { data },
    } = await axiosClient.post(`/reports/posts/${postId}`, {
      content,
    });

    return data;
  };

  return useMutation({
    mutationFn: () => createReportByPostId({ postId, content }),
  });
};

export default useReportPostMutate;
