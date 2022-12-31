import Image from 'next/image';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

const EmptyCard = ({ children }: { children: ReactElement | string }) => {
  return (
    <EmptyCardContainer>
      <Image src="/images/empty-img.svg" alt="empty-img" width="118" height="53" />
      <EmptyCardText>{children}</EmptyCardText>
    </EmptyCardContainer>
  );
};

const EmptyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: ${colors.gray100};
  color: ${colors.gray500};
  border-radius: 1.2rem;
`;

const EmptyCardText = styled.div`
  margin-top: 1.8rem;
  text-align: center;
  display: block;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.03rem;
`;

export default EmptyCard;
