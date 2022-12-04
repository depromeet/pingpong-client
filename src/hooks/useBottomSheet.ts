import { useRecoilState } from 'recoil';

import { bottomSheetAtom } from '@/store/components';

const useBottomSheet = () => {
  const [isShowing, setIsShowing] = useRecoilState(bottomSheetAtom);

  return {
    isShowing,
    setIsShowing,
  };
};

export default useBottomSheet;
