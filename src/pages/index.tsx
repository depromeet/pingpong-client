import type { NextPage } from 'next';
import { useTestDetail } from 'src/hooks/test';

const Home: NextPage = () => {
  const { data } = useTestDetail(1);

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
