import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { popupAtom } from '@/store/components';

export const usePopup = () => {
  const router = useRouter();

  const popupValue = useRecoilValue(popupAtom);
  const setPopup = useSetRecoilState<PopupProps | null>(popupAtom);

  useEffect(() => {
    router.beforePopState(() => {
      if (popupValue) {
        setPopup(null);
      }
      return false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    if (popupValue) {
      router.push({ hash: 'popup' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupValue]);
};
