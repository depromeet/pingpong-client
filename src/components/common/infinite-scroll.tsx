import { Fragment, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
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

function InfiniteScrollSample() {
  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteScroll();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: </p>
  ) : (
    <>
      {!isFetching &&
        data.pages.map((page: User, i: number) => {
          page.map((list) => {
            console.log(list);
          });

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
