import type { RecoilState } from 'recoil';
import { useRecoilState } from 'recoil';

const useBackPage = (atom: RecoilState<number>) => {
  const [order, setOrder] = useRecoilState(atom);

  const handleOrder = () => {
    setOrder((prev) => prev - 1);
  };

  return { order, handleOrder };
};

export default useBackPage;
