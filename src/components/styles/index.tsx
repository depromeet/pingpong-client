import styled from 'styled-components';

import { colors } from '@/constants/styles';

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.03rem;
`;

const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.1rem;
  letter-spacing: -0.03rem;
`;

const Content = styled.h2`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: ${colors.gray500};
`;

const Desc = styled.p`
  font-size: 1.3rem;
  line-height: 1.95rem;
  letter-spacing: -0.03rem;
`;

export const Typography = {
  Title,
  Subtitle,
  Content,
  Desc,
};

const DefaultContainer = styled.div`
  padding: 6rem 0;
`;

const DetailContainer = styled.div`
  padding: 1.6rem 0;
`;

const DefaultPadding = styled.div`
  padding: 0 1.6rem;
`;

const Divider = styled.div`
  content: '';
  width: 100%;
  height: 0.8rem;
  background-color: ${colors.gray100};
  padding: -6rem;
`;

export const Layout = {
  DefaultContainer,
  DefaultPadding,
  DetailContainer,
  Divider,
};
