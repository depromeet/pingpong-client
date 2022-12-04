import type { ChangeEvent } from 'react';
import { useState } from 'react';

const useRadioGroup = (list: string[]) => {
  const [labelList, setLabelList] = useState<string[]>(list);
  const [currentSelected, setCurrentSelected] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSelected(e.target.value);
  };

  return {
    labelList,
    currentSelected,
    onChange,
  };
};

export default useRadioGroup;
