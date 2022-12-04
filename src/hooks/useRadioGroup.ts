import type { ChangeEvent } from 'react';
import { useState } from 'react';

export interface Radio {
  key: string;
  label: string;
}

const useRadioGroup = (list: Radio[]) => {
  const [currentSelected, setCurrentSelected] = useState<Radio | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSelected(() => ({
      key: e.target.id,
      label: e.target.value,
    }));
  };

  return {
    list,
    currentSelected,
    onChange,
  };
};

export default useRadioGroup;
