import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { headerAtom } from '@/store/components';
import type { HeaderProps } from '@/typings/common';

export const useHeader = (props: HeaderProps) => {
  const [_, setHeader] = useRecoilState<HeaderProps | null>(headerAtom);

  useEffect(() => {
    setHeader(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useHeader;
