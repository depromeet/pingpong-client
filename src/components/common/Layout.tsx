import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import { usePopup } from '@/hooks/usePopup';
import { popupAtom, toastAtom } from '@/store/components/atoms';

import Popup from './Popup';
import Toast from './Toast';

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);
  const popupValue = useRecoilValue(popupAtom);

  usePopup();

  return (
    <>
      {children}
      {popupValue && <Popup {...popupValue} />}
      {toastValue && <Toast value={toastValue} />}
    </>
  );
};

export default Layout;
