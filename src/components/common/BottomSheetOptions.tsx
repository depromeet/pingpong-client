import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { bottomSheetActiveOptionAtom } from '@/store/components';
import type { Option } from '@/typings/common';

const BottomSheetOptions = ({ list }: { list: Option[] }) => {
  const [activeOption, setActiveOption] = useRecoilState(bottomSheetActiveOptionAtom);

  return (
    <OptionList>
      {list.map((item) => (
        <OptionItem
          key={item.id}
          value={item.id}
          isActive={activeOption.id === item.id}
          onClick={() => setActiveOption(item)}
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
