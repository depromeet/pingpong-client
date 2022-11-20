import { useRecoilState } from 'recoil';

import { bottomSheetOpenState } from '@/store/bottomSheet';

export function useBottomSheet() {
  const [isShowing, setIsShowing] = useRecoilState(bottomSheetOpenState);

  return {
    isShowing,
    setIsShowing,
  };
}
