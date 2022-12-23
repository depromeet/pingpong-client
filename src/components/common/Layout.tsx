import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import { usePopup } from '@/hooks/usePopup';
import { headerAtom, popupAtom, toastAtom } from '@/store/components/atoms';

import Header from './Header';
import NavigationBar from './NavigationBar';
import Popup from './Popup';
import Toast from './Toast';

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);
  const popupValue = useRecoilValue(popupAtom);
  const headerValue = useRecoilValue(headerAtom);
  const router = useRouter();

  const GNB_CONDITION = router.asPath === '/' || '/talent/register' || '/profile';

  usePopup();

  return (
    <>
      {headerValue && <Header {...headerValue} />}
      {children}
      {popupValue && <Popup {...popupValue} />}
      {toastValue && <Toast value={toastValue} />}
      {GNB_CONDITION && <NavigationBar className="fixed bottom-0 left-0" />}
    </>
  );
};

export default Layout;
