import { useRecoilState } from 'recoil';

import type { RadioUI } from '@/components/common/RadioButtonGroup';
import { talentRegisterEnvironmnetAtomFamily } from '@/store/components';

export interface Radio {
  key: string;
  label: string;
}

interface UseRadioGroupProps {
  inputKey: string;
  list: RadioUI[] | Radio[];
}

const useRadioGroup = ({ list, inputKey }: UseRadioGroupProps) => {
  const [currentSelected, setCurrentSelected] = useRecoilState(talentRegisterEnvironmnetAtomFamily(inputKey));

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
