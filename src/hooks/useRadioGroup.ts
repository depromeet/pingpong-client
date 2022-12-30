import { useState } from 'react';

import type { RadioUI } from '@/components/common/RadioButtonGroup';

export interface Radio {
  key: string;
  label: string;
}

interface UseRadioGroupProps {
  list: RadioUI[] | Radio[];
  initialValue?: Radio | null;
}

const useRadioGroup = ({ list, initialValue = null }: UseRadioGroupProps) => {
  const [currentSelected, setCurrentSelected] = useState<Radio | null>(initialValue);

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
