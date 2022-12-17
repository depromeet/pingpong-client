import styled from 'styled-components';

import ArrowLeftIcon from '../../../public/icons/arrow-left.svg';
import MoreIcon from '../../../public/icons/more.svg';

const PostHeaderNav = () => {
  return (
    <HeaderNavContainer>
      <ArrowLeftIcon />
      <MoreIcon />
    </HeaderNavContainer>
  );
};

export default PostHeaderNav;

const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 3.6rem;
`;
