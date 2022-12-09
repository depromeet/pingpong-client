import styled from 'styled-components';

import { colors } from '@/constants/styles';

const Divider = () => {
  return <StyledDivider></StyledDivider>;
};

const StyledDivider = styled.div`
  content: '';
  width: 100%;
  height: 0.8rem;
  background-color: ${colors.gray100};
  padding: -6rem;
  margin-top: 3.2rem;
  margin-bottom: 4rem;
`;

export default Divider;
