import { useIsFetching } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { usePopup } from '@/hooks/usePopup';
import { headerAtom, popupAtom, spinnerAtom, toastAtom } from '@/store/components/atoms';

import Header from './Header';
import NavigationBar from './NavigationBar';
import Popup from './Popup';
import Spinner from './Spinner';
import Toast from './Toast';

const hasGnbPath = ['/', '/profile', '/talent/register'];

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);
  const popupValue = useRecoilValue(popupAtom);
  const headerValue = useRecoilValue(headerAtom);
  const router = useRouter();

  const showGnb = useMemo(() => hasGnbPath.includes(router.pathname), [router]);
  const [isSpinnerActive, setIsSpinnerActive] = useRecoilState(spinnerAtom);

  usePopup();

  const isFetching = useIsFetching();

  useEffect(() => {
    isFetching ? setIsSpinnerActive(true) : setIsSpinnerActive(false);
  }, [isFetching, setIsSpinnerActive]);

  return (
    <>
      {headerValue && <Header {...headerValue} />}
      <main className="pb-[82px]">{children}</main>
      {popupValue && <Popup {...popupValue} />}
      {toastValue && <Toast value={toastValue} />}
      {showGnb && <NavigationBar className="fixed bottom-0 left-0" />}
      <Spinner isShowing={isSpinnerActive} />
    </>
  );
};

export default Layout;
