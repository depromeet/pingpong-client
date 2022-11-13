import type { QueryFunctionContext } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface PageParam {
  previousId: number | null;
  nextId: number | null;
}

interface User extends PageParam {
  id: number;
  name: string;
  createdAt: string;
  avatar: string;
}

const fetchData = async (queryKey: QueryFunctionContext): Promise<User> => {
  const { pageParam } = queryKey;
  const res = await axios.get('https://636783c3f5f549f052d6d334.mockapi.io/users?cursor=' + pageParam);
  return res.data;
};

const useInfiniteScroll = () => {
  const query = useInfiniteQuery({
    queryKey: ['sample'],
    queryFn: fetchData,
    getPreviousPageParam: (firstpage) => firstpage.previousId ?? undefined,
    getNextPageParam: (lastpage) => lastpage.nextId ?? undefined,
  });

  return { ...query };
};

// interface InfiniteScrollProps<T> {
//   queryKey: string;
//   queryFn: ({ pageParam = 0 }: { pageParam?: number }) => Promise<T>;
// }

// const useInfiniteScroll = <T>({ queryKey, queryFn }: InfiniteScrollProps<T>) => {
//   const query = useInfiniteQuery<T>({
//     queryKey,
//     queryFn,
//     getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
//     getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
//   });

//   return query;
// };

export default useInfiniteScroll;
