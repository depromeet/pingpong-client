import { useEffect } from 'react';
import type { RecoilState } from 'recoil';
import { useRecoilState } from 'recoil';

const ORDER_LIMIT = 1;

const useBackPage = (atom: RecoilState<number>) => {
  const [order, setOrder] = useRecoilState(atom);

  useEffect(() => {
    order < ORDER_LIMIT && setOrder(ORDER_LIMIT);
  }, [order, setOrder]);

  const handleOrder = () => {
    setOrder((prev) => prev - 1);
  };

  return { order, handleOrder };
};

export default useBackPage;
