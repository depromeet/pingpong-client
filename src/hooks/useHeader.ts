import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { headerAtom } from '@/store/components';

export const useHeader = (props: Header) => {
  const [_, setHeader] = useRecoilState<Header | null>(headerAtom);

  useEffect(() => {
    setHeader(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useHeader;
