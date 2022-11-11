import { useMutation, useQuery } from '@tanstack/react-query';
import { mutationFn, queryFn } from 'src/apis';

type Animal = { id: number; name: string; image_link: string };

export const useTest = () => {
  const query = useQuery<Animal>({ queryFn });

  return query;
};

export const useTestDetail = (id: number) => {
  const query = useQuery<Animal>({ queryKey: ['/animals/rand', { key: id }], queryFn });

  return query;
};

export const useTestMutation = (id: number, phone: string) => {
  const mutation = useMutation({
    mutationFn: () => mutationFn('/test', 'POST', { id, phone }),
  });

  return mutation;
};
