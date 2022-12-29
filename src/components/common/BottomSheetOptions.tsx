import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import useBottomSheet from '@/hooks/useBottomSheet';
import { bottomSheetActiveOptionAtom, bottomSheetOptionsAtom } from '@/store/components';
import type { Option } from '@/typings/common';

const BottomSheetOptions = () => {
  const [activeOption, setActiveOption] = useRecoilState(bottomSheetActiveOptionAtom);
  const [bottomSheetOptions, setBottomSheetOptions] = useRecoilState<Option[]>(bottomSheetOptionsAtom);

  const { closeBottomSheet } = useBottomSheet();

  const onClickOption = (item: Option) => {
    setActiveOption(item);
    closeBottomSheet();
  };

  return (
    <OptionList>
      {bottomSheetOptions.map((item) => (
        <OptionItem
          key={item.id}
          value={item.id}
          isActive={activeOption.id === item.id}
          onClick={() => onClickOption(item)}
        >
          {item.label}
        </OptionItem>
      ))}
    </OptionList>
  );
};

export default BottomSheetOptions;

const OptionList = styled.ul`
  margin-bottom: 5rem;
`;

const OptionItem = styled.li`
  padding: 1.2rem 3rem;
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: -0.04rem;
  border-bottom: 0.1rem solid #f0f0f0;
`;
