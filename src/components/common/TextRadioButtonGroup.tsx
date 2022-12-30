import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import type { Radio } from '@/hooks/useRadioGroup';
import { talentRegisterInputSelectorFamily } from '@/store/components/selectors';

import type { RadioButtonGroupProps } from './RadioButtonGroup';
import RadioButtonGroup from './RadioButtonGroup';

export interface TextRadioButtonGroupProps extends RadioButtonGroupProps {
  inputKey: string;
  title: string;
  htmlFor: string;
  required?: boolean;
}

const TextRadioButtonGroup = ({
  inputKey, // INFO: key가 RadioButtonGroup에서 사용중이므로 warning이 발생합니다. -> inputKey로 대체하였습니다.
  title,
  htmlFor,
  required = true,
  size = 'medium',
  currentSelected,
  list,
  onChange,
  name = 'radio',
}: TextRadioButtonGroupProps) => {
  const setInput = useSetRecoilState(talentRegisterInputSelectorFamily(inputKey));

  useEffect(() => {
    if (currentSelected !== null) {
      setInput((prev) => ({ ...prev, contents: currentSelected.key }));
    }
  }, [currentSelected, setInput]);

  return (
    <>
      {title && (
        <div className="relative mb-[12px]">
          <label htmlFor={htmlFor} className="text-t3">
            {title}
          </label>
          {required && <span className="absolute text-primary-red text-b4 ml-[3px] top-[0px]">*</span>}
        </div>
      )}
      <RadioButtonGroup
        size={size}
        currentSelected={currentSelected}
        list={list}
        onChange={onChange}
        name={name}
        className="mb-[32px]"
      />
    </>
  );
};

export default TextRadioButtonGroup;
