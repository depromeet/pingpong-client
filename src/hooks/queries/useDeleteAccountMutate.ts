import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';

const useDeleteAccountMutate = () => {
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
    onSuccess: () => {
      // TODO: open toast with message
    },
  });
};

export default useDeleteAccountMutate;
