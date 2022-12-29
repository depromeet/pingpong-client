import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

const useReportPostMutate = (postId: number) => {
  const createReportByPostId = async (postId: number) => {
    const {
      data: { data },
    } = await axiosClient.post(`/.api/reports/posts/${postId}`, {
      content: '사용자 정보가 부정확해요.',
    });

    return data;
  };

  return useMutation({
    mutationFn: () => createReportByPostId(postId),
  });
};

export default useReportPostMutate;
