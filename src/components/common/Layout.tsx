import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import { toastAtom } from '@/store/components/atoms';

import Toast from './Toast';

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);

  return (
    <>
      {children}

      {toastValue && <Toast value={toastValue} />}
    </>
  );
};

export default Layout;
