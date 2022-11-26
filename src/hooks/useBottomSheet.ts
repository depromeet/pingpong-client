import { useRecoilState } from 'recoil';

import { bottomSheetAtom } from '@/store/components';

export function useBottomSheet() {
  const [isShowing, setIsShowing] = useRecoilState(bottomSheetAtom);

  return {
    isShowing,
    setIsShowing,
  };
}
