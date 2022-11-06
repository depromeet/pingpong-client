import { useInfiniteQuery } from '@tanstack/react-query';

interface InfiniteScrollProps<T> {
  queryKey: string;
  queryFn: ({ pageParam = 0 }: { pageParam?: number }) => Promise<T>;
}

const useInfiniteScroll = <T>({ queryKey, queryFn }: InfiniteScrollProps<T>) => {
  const query = useInfiniteQuery<T>({
    queryKey,
    queryFn,
    getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
    getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  });

  return query;
};

export default useInfiniteScroll;
