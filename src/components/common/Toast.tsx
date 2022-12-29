import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { toastAtom } from '@/store/components/atoms';

interface Props {
  value: string;
}

const Toast = ({ value }: Props) => {
  const [fadeout, setFadeout] = useState(false);
  const setToast = useSetRecoilState<string | null>(toastAtom);

  useEffect(() => {
    const fadeoutTimer = setTimeout(() => {
      setFadeout(true);
    }, 2000);

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeoutTimer);
    };
  }, [setToast]);

  return (
    <aside
      className={`fixed grid place-items-center w-full px-5 bottom-9 z-10 animate-slideup ${
        fadeout && 'animate-fadeout'
      }`}
    >
      <p className="text-white bg-primary-dark w-full px-5 py-3 rounded-xl break-all">{value}</p>
    </aside>
  );
};

export default Toast;
