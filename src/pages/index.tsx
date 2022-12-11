import type { NextPage } from 'next';

import usePostQuery from '@/hooks/queries/usePostQuery';

const Home: NextPage = () => {
  const zz = usePostQuery();
  console.log('zz', zz);
  return <div>hello world!</div>;
};

export default Home;
