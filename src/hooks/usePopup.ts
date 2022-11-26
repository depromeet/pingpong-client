import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { popupAtom } from '@/store/components';

export const usePopup = () => {
  const router = useRouter();

  const [popup, setPopup] = useRecoilState<PopupProps | null>(popupAtom);

  useEffect(() => {
    router.beforePopState(() => {
      if (popup) {
        setPopup(null);
      }
      return false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    if (popup) {
      router.push({ hash: 'popup' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popup]);
};
