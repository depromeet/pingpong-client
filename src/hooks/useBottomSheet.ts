import { useRecoilState } from 'recoil';

import type { Option } from '@/components/common/BottomSheetOptions';
import { bottomSheetAtom, bottomSheetOptionsAtom } from '@/store/components';

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
