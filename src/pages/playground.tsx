import styled from 'styled-components';

import BottomSheet from '@/components/common/BottomSheet';
import BottomSheetOptions from '@/components/common/BottomSheetOptions';
import RadioGroup from '@/components/common/RadioGroup';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import useRadioGroup from '@/hooks/useRadioGroup';

const Playground = () => {
  const { isShowing, setIsShowing } = useBottomSheet();

  const mockList = [
    { id: 1, label: '하하' },
    { id: 2, label: '호호' },
    { id: 2, label: '후후' },
  ];

  const { labelList, currentSelected, onChange } = useRadioGroup([
    '사용자 정보가 부정확해요.',
    '광고성/홍보성 글이에요.',
    'text3',
    'text4',
  ]);

  return (
    <PlaygroundContainer>
      <PlaygroundBlock>
        <PlaygroundTitle>Bottom Sheet</PlaygroundTitle>
        <BottomSheet isShowing={isShowing} onClose={() => setIsShowing(false)}>
          <BottomSheetOptions list={mockList} />
        </BottomSheet>
        <TestButton onClick={() => setIsShowing(true)}>바텀시트 열기</TestButton>
      </PlaygroundBlock>
      <PlaygroundBlock>
        <PlaygroundTitle>Radio (Group)</PlaygroundTitle>
        <RadioGroup list={labelList} currentSelected={currentSelected} onChange={onChange} />
      </PlaygroundBlock>
    </PlaygroundContainer>
  );
};

export default Playground;

const TestButton = styled.button`
  background-color: black;
  color: white;
  width: 10rem;
  height: 5rem;
`;

const PlaygroundContainer = styled.div`
  padding: 3rem;
`;

const PlaygroundBlock = styled.div`
  background-color: #eee;
  margin-bottom: 2rem;
  padding: 4rem;
`;

const PlaygroundTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
