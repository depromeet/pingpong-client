import { useIsFetching } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { usePopup } from '@/hooks/usePopup';
import { headerAtom, popupAtom, spinnerAtom, toastAtom } from '@/store/components/atoms';

import Header from './Header';
import NavigationBar from './NavigationBar';
import Popup from './Popup';
import Spinner from './Spinner';
import Toast from './Toast';

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);
  const popupValue = useRecoilValue(popupAtom);
  const headerValue = useRecoilValue(headerAtom);
  const router = useRouter();

  const GNB_CONDITION = router.asPath === '/' || '/talent/register' || '/profile';
  const [isSpinnerActive, setIsSpinnerActive] = useRecoilState(spinnerAtom);

  usePopup();

  const isFetching = useIsFetching();

  useEffect(() => {
    isFetching ? setIsSpinnerActive(true) : setIsSpinnerActive(false);
  }, [isFetching, setIsSpinnerActive]);

  return (
    <>
      {headerValue && <Header {...headerValue} />}
      {children}
      {popupValue && <Popup {...popupValue} />}
      {toastValue && <Toast value={toastValue} />}
      {GNB_CONDITION && <NavigationBar className="fixed bottom-0 left-0" />}
      <Spinner isShowing={isSpinnerActive} />
    </>
  );
};

export default Layout;
