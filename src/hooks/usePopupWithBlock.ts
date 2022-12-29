import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { popupAtom } from '@/store/components';
import type { PopupProps } from '@/typings/common';

export const usePopupWithBlock = (blockPopupProps?: PopupProps) => {
  const router = useRouter();

  const isBlockBack = useRef<PopupProps | undefined>(blockPopupProps);
  const [popup, setPopup] = useRecoilState<PopupProps | null>(popupAtom);

  const showBlockPopup = () => {
    setPopup({
      ...blockPopupProps,
      onCancel: () => null,
      onConfirm: () => {
        if (blockPopupProps?.onConfirm) {
          blockPopupProps.onConfirm();
        }
        isBlockBack.current = undefined;
        router.back();
      },
    });
  };

  useEffect(() => {
    router.beforePopState(() => {
      if (isBlockBack.current) {
        showBlockPopup();
        window.history.pushState({}, 'popup');

        return false;
      }
      if (!isBlockBack.current && popup) {
        window.history.pushState({}, 'popup', router.route);
        return false;
      }
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, popup]);

  return { setPopup };
};
