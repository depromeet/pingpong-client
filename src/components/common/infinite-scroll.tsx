import type { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';
import { Fragment } from 'react';
import useInfiniteScroll from 'src/hooks/queries/useInfiniteScroll';

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

function InfiniteScroll() {
  const fetchData = async (queryKey: QueryFunctionContext): Promise<User[]> => {
    const { pageParam } = queryKey;
    const res = await axios.get('https://636783c3f5f549f052d6d334.mockapi.io/users?cursor=' + pageParam);
    return res.data;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteScroll<User[]>(
    {
      queryKey: 'dataSample',
      queryFn: fetchData,
    },
  );

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: </p>
  ) : (
    <>
      {!isFetching &&
        data.map((page: User, i: number) => (
          <Fragment key={i}>
            {page.id} : {page.name}
          </Fragment>
        ))}
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
}

export default InfiniteScroll;

// const BigButton = styled.div`
//   width: 10rem;
//   height: 5rem;
//   color: white;
//   background-color: black;
// `;
