import { useRouter } from 'next/router';
import styled from 'styled-components';

import useBottomSheet from '@/hooks/useBottomSheet';

import ArrowLeftIcon from '../../../public/icons/arrow-left.svg';
import MoreIcon from '../../../public/icons/more.svg';

const PostHeaderNav = () => {
  const router = useRouter();
  const { setIsShowing } = useBottomSheet();

  return (
    <HeaderNavContainer>
      <button onClick={() => router.back()}>
        <ArrowLeftIcon />
      </button>
      <MoreIcon onClick={() => setIsShowing(true)} />
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
