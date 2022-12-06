import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import { usePopup } from '@/hooks/usePopup';
import { headerAtom, popupAtom, toastAtom } from '@/store/components/atoms';

import Header from './Header';
import Popup from './Popup';
import Toast from './Toast';

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);
  const popupValue = useRecoilValue(popupAtom);
  const headerValue = useRecoilValue(headerAtom);

  usePopup();

  return (
    <>
      {headerValue && <Header {...headerValue} />}
      {children}
      {popupValue && <Popup {...popupValue} />}
      {toastValue && <Toast value={toastValue} />}
    </>
  );
};

export default Layout;
