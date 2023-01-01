import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

import { useToast } from '../useToast';

const useDeleteAccountMutate = () => {
  const { setToast } = useToast();

  const deleteAccount = async ({ content }: { content: string }) => {
    const {
      data: { data },
    } = await axiosClient.delete(`/members/me`, {
      data: {
        content,
      },
    });

    return data;
  };

  return useMutation({
    mutationFn: ({ content }: { content: string }) => deleteAccount({ content }),
    onSuccess: () => setToast('탈퇴 처리가 완료되었어요. 😢'),
    onError: () => setToast('탈퇴 처리에 실패했어요.'),
  });
};

export default useDeleteAccountMutate;
