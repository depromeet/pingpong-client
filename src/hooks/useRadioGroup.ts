import { useEffect, useState } from 'react';

export interface Radio {
  key: string;
  label: string;
}

const useRadioGroup = (list: Radio[]) => {
  const [currentSelected, setCurrentSelected] = useState<Radio>(list[0]);

  const onChange = ({ key, label }: Radio) => {
    setCurrentSelected(() => ({
      key,
      label,
    }));
  };

  return {
    list,
    currentSelected,
    onChange,
  };
};

export default useRadioGroup;
