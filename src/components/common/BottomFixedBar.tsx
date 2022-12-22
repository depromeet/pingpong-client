import type { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

const BottomFixedBar = ({ children }: { children: ReactNode }) => {
  return (
    <BottomFixedBarContainer>
      <BottomFixedBarContent>{children}</BottomFixedBarContent>
    </BottomFixedBarContainer>
  );
};

const BottomFixedBarContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 9rem;
  border-top: 0.1rem solid ${colors.gray100};
  padding: 0.8rem 1.6rem;
  background-color: white;
`;

const BottomFixedBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default BottomFixedBar;
