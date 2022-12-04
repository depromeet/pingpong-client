import type { ChangeEvent } from 'react';
import { useState } from 'react';

const useRadioGroup = (list: string[]) => {
  const [currentSelected, setCurrentSelected] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSelected(e.target.value);
  };

  return {
    list,
    currentSelected,
    onChange,
  };
};

export default useRadioGroup;
