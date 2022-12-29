import { useRecoilState, useRecoilValue } from 'recoil';

import { bottomSheetAtom, bottomSheetOptionsAtom } from '@/store/components';
import type { Option } from '@/typings/common';

const useBottomSheet = () => {
  const [isShowing, setIsShowing] = useRecoilState(bottomSheetAtom);

  const openBottomSheet = () => {
    setIsShowing(true);
  };

  const closeBottomSheet = () => {
    setIsShowing(false);
  };

  return {
    isShowing,
    openBottomSheet,
    closeBottomSheet,
    // bottomSheetOptions,
    // setBottomSheetOptions,
  };
};

export default useBottomSheet;
