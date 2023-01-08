import { useIsFetching } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import { useAuth } from '@/hooks/useAuth';
import useBottomSheet from '@/hooks/useBottomSheet';
import { headerAtom, myInfoAtom, popupAtom, spinnerAtom, toastAtom } from '@/store/components/atoms';
import type { UserInfo } from '@/typings/common';

import BottomSheet from './BottomSheet';
import BottomSheetOptions from './BottomSheetOptions';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Popup from './Popup';
import Spinner from './Spinner';
import Toast from './Toast';

const hasGnbPath = ['/main', '/profile', '/talent/register'];

const Layout = ({ children }: PropsWithChildren) => {
  const toastValue = useRecoilValue(toastAtom);
  const [popupValue, setPopup] = useRecoilState(popupAtom);
  const headerValue = useRecoilValue(headerAtom);
  const router = useRouter();

  const showGnb = useMemo(() => hasGnbPath.includes(router.pathname), [router]);
  const [isSpinnerActive, setIsSpinnerActive] = useRecoilState(spinnerAtom);
  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  const isFetching = useIsFetching();

  const { data: userData, isSuccess: userDataIsSuccess } = useUserInfoQuery();
  const setMyInfo = useSetRecoilState<UserInfo | null>(myInfoAtom);

  useEffect(() => {
    if (!userDataIsSuccess) return;

    setMyInfo(userData);
  }, [userDataIsSuccess, userData, setMyInfo]);

  useEffect(() => {
    let timer = null;

    if (isFetching) {
      if (timer) {
        setIsSpinnerActive(false);
      }
      timer = setTimeout(() => {
        if (isSpinnerActive) {
          setIsSpinnerActive(true);
        }
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, setIsSpinnerActive]);

  useEffect(() => {
    setPopup(null);
  }, [router.asPath, setPopup]);

  return (
    <>
      {headerValue && <Header {...headerValue} />}
      <main className={showGnb ? `pb-[82px]` : ''}>{children}</main>
      {popupValue?.isShowing && <Popup {...popupValue} />}
      {toastValue && <Toast value={toastValue} />}
      {showGnb && <NavigationBar className="fixed bottom-0 left-0" />}
      {isSpinnerActive && <Spinner isDimmed={isSpinnerActive} />}
      <BottomSheet isShowing={isBottomSheetOpen} onClose={closeBottomSheet}>
        <BottomSheetOptions />
      </BottomSheet>
    </>
  );
};

export default Layout;
