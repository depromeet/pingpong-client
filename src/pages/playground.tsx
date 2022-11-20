import styled from 'styled-components';

import BottomSheet from '@/components/common/BottomSheet';
import { useBottomSheet } from '@/hooks/useBottomSheet';

const Playground = () => {
  const { isShowing, setIsShowing } = useBottomSheet();

  return (
    <div>
      <BottomSheet isShowing={isShowing} handleClose={() => setIsShowing(false)}>
        라라라
      </BottomSheet>
      <TestButton onClick={() => setIsShowing(true)}>바텀시트 열기</TestButton>
    </div>
  );
};

export default Playground;

const TestButton = styled.button`
  background-color: black;
  color: white;
  height: 2rem;
`;
