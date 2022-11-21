import styled from 'styled-components';

import BottomSheet from '@/components/common/BottomSheet';
import BottomSheetOptions from '@/components/common/BottomSheetOptions';
import { useBottomSheet } from '@/hooks/useBottomSheet';

const Playground = () => {
  const { isShowing, setIsShowing } = useBottomSheet();

  const mockList = [
    { id: 1, label: '하하' },
    { id: 2, label: '호호' },
    { id: 2, label: '후후' },
  ];

  return (
    <div>
      <BottomSheet isShowing={isShowing} onClose={() => setIsShowing(false)}>
        <BottomSheetOptions list={mockList} />
      </BottomSheet>
      <TestButton onClick={() => setIsShowing(true)}>바텀시트 열기</TestButton>
    </div>
  );
};

export default Playground;

const TestButton = styled.button`
  background-color: black;
  color: white;
  width: 10rem;
  height: 5rem;
`;
