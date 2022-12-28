import { useRecoilState, useRecoilValue } from 'recoil';

import { bottomSheetAtom, bottomSheetOptionsAtom } from '@/store/components';
import type { Option } from '@/typings/common';

const useBottomSheet = () => {
  const [isShowing, setIsShowing] = useRecoilState(bottomSheetAtom);
  const [bottomSheetOptions, setBottomSheetOptions] = useRecoilState<Option[]>(bottomSheetOptionsAtom);

  return {
    isShowing,
    setIsShowing,
    bottomSheetOptions,
    setBottomSheetOptions,
  };
};

export default useBottomSheet;
