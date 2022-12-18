import styled from 'styled-components';

import { colors } from '@/constants/styles';

import IconLikeEmpty from '../../../public/icons/like-empty.svg';
import IconLikeFilled from '../../../public/icons/like-filled.svg';

type LikeButtonStyle = 'VERTICAL' | 'HORIZONTAL';

const LikeButton = ({ type, isFilled, count }: { type: LikeButtonStyle; isFilled: boolean; count: string }) => {
  return (
    <LikeButtonContainer type={type}>
      <IconWrapper type={type}>{isFilled ? <IconLikeFilled /> : <IconLikeEmpty />}</IconWrapper>
      <LikeCount>{count}</LikeCount>
    </LikeButtonContainer>
  );
};

export default LikeButton;

const LikeButtonContainer = styled.div<{ type: LikeButtonStyle }>`
  display: flex;
  align-items: center;
  color: ${colors.black};
  ${({ type }: { type: LikeButtonStyle }) => type === 'VERTICAL' && 'flex-direction: column; width: 4.8rem;'};
`;

const IconWrapper = styled.div<{ type: LikeButtonStyle }>`
  ${({ type }: { type: LikeButtonStyle }) =>
    type === 'VERTICAL' ? `width: 2rem; height: 2rem;` : `width: 1.4rem; height: 1.4rem;`};
`;

const LikeCount = styled.p`
  text-align: center;

  ${({ type }: { type: LikeButtonStyle }) =>
    type === 'VERTICAL'
      ? `font-size: 1.2rem; line-height: 1.8rem; letter-spacing: -0.03rem; font-weight: 500;`
      : `font-size: 1.2rem; line-height: 1.8rem; letter-spacing: -0.03rem; font-weight: 500; margin-left: 1.2rem;`};
`;
