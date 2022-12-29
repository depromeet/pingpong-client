import { useRecoilState, useSetRecoilState } from 'recoil';

import { bottomSheetAtom, bottomSheetOptionsAtom } from '@/store/components';
import type { Option } from '@/typings/common';

const useBottomSheet = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useRecoilState(bottomSheetAtom);
  const setBottomSheetOptions = useSetRecoilState<Option[]>(bottomSheetOptionsAtom);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const addBottomSheetOptions = (value: Option[]) => {
    setBottomSheetOptions(value);
  };

  return {
    isBottomSheetOpen,
    openBottomSheet,
    closeBottomSheet,
    addBottomSheetOptions,
  };
};

export default useBottomSheet;
