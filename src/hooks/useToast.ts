import { useSetRecoilState } from 'recoil';

import { toastAtom } from '@/store/components';

export const useToast = () => {
  const setToast = useSetRecoilState(toastAtom);

  return { setToast };
};
