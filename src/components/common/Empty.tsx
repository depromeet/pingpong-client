import type { ReactElement } from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

import EmptyImage from '../../../public/images/empty-img.svg';

const Empty = ({ children }: { children: ReactElement | string }) => {
  return (
    <EmptyContainer>
      {/* <EmptyImage /> */}
      <p>{children}</p>
    </EmptyContainer>
  );
};

const EmptyContainer = styled.div`
  background-color: ${colors.gray100};
  height: 15.7rem;
  border-radius: 1.2rem;
`;

export default Empty;
