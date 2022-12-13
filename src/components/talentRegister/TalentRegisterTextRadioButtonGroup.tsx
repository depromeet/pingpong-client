import useRadioGroup from '@/hooks/useRadioGroup';

import type { RadioUI } from '../common/RadioButtonGroup';
import TextRadioButtonGroup from '../common/TextRadioButtonGroup';

interface TalentRegisterTextRadioButtonGroupProp {
  radioList: RadioUI[];
  inputKey: string;
  htmlFor: string;
  title: string;
  size?: 'small' | 'medium';
}

const TalentRegisterTextRadioButtonGroup = ({
  options: { radioList, inputKey, htmlFor, title, size },
}: {
  options: TalentRegisterTextRadioButtonGroupProp;
}) => {
  const { list, currentSelected, onChange } = useRadioGroup(radioList);

  return (
    <TextRadioButtonGroup
      inputKey={inputKey}
      htmlFor={htmlFor}
      title={title}
      size={size}
      list={list}
      currentSelected={currentSelected}
      onChange={onChange}
    />
  );
};

export default TalentRegisterTextRadioButtonGroup;
