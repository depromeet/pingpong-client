import type { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

const BottomFixedBar = ({ children }: { children: ReactNode }) => {
  return <BottomFixedBarContainer>{children}</BottomFixedBarContainer>;
};

const BottomFixedBarContainer = styled.div`
  height: 9rem;
  border-top: 0.1rem solid ${colors.gray100};
  background-color: white;
`;

export default BottomFixedBar;
