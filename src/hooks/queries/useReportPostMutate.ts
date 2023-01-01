import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

import { useToast } from '../useToast';

const useReportPostMutate = () => {
  const { setToast } = useToast();

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
    onSuccess: () => setToast('신고 처리가 완료되었어요. 😢'),
    onError: () => setToast('신고 처리에 실패했어요.'),
  });
};

export default useReportPostMutate;
