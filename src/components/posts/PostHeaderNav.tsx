import { useRouter } from 'next/router';
import styled from 'styled-components';

import useBottomSheet from '@/hooks/useBottomSheet';

import ArrowLeftIcon from '../../../public/icons/arrow-left.svg';
import MoreIcon from '../../../public/icons/more.svg';

const PostHeaderNav = ({ isMyPost = false }: { isMyPost?: boolean }) => {
  const router = useRouter();
  const { openBottomSheet, addBottomSheetOptions } = useBottomSheet();

  const onClickMore = () => {
    isMyPost
      ? addBottomSheetOptions([{ id: 'DELETE', label: '게시글 삭제' }])
      : addBottomSheetOptions([{ id: 'REPORT', label: '사용자 신고하기' }]);
    openBottomSheet();
  };

  const onClickBack = () => {
    router.query.new ? router.push('/main') : router.back();
  };

  return (
    <HeaderNavContainer>
      <button onClick={onClickBack}>
        <ArrowLeftIcon />
      </button>
      <MoreIcon onClick={onClickMore} />
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
