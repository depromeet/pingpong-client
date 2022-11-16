import { useMutation, useQuery } from '@tanstack/react-query';
import { mutateFetcher, queryFetcher } from 'src/apis';

type Animal = { id: number; name: string; image_link: string };

export const useTest = () => {
  const query = useQuery<Animal>(['animal'], () => queryFetcher('/animals/rand', { id: 1 }));

  return query;
};

export const useTestMutation = (id: number, phone: string) => {
  const mutation = useMutation(() => mutateFetcher('/test', 'DELETE', { id, phone }));

  return mutation;
};
