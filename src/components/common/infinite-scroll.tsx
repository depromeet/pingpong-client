import { Fragment, useEffect } from 'react';

import useInfinitePosts from '@/hooks/queries/useInfinitePosts';

function InfiniteScrollSample() {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfinitePosts();

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: </p>
  ) : (
    <>
      {!isFetching &&
        data.pages.map((page: Card, i: number) => {
          return (
            <Fragment key={i}>
              <p>{page.id}</p>
            </Fragment>
          );
        })}
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
}

export default InfiniteScrollSample;
