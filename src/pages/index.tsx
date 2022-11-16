import type { NextPage } from 'next';
import { useTest } from 'src/hooks/test';

const Home: NextPage = () => {
  const { data } = useTest();

  return (
    <div>
      hello world!
      <div className=""></div>
      <span>{data?.id}</span>
      <span>{data?.name}</span>
    </div>
  );
};

export default Home;
