import styled from 'styled-components';

import { colors } from '@/constants/styles';

import IconLikeEmpty from '../../../public/icons/like-empty.svg';
import IconLikeFilled from '../../../public/icons/like-filled.svg';

type LikeButtonStyle = 'VERTICAL' | 'HORIZONTAL';

interface LikeButtonProps {
  type: LikeButtonStyle;
  isFilled: boolean;
  count: string;
  onClick: () => void;
}

const LikeButton = ({ type, isFilled, count, onClick }: LikeButtonProps) => {
  return (
    <LikeButtonContainer type={type} onClick={onClick}>
      <IconWrapper type={type}>{isFilled ? <IconLikeFilled /> : <IconLikeEmpty />}</IconWrapper>
      <LikeCount type={type}>{count}</LikeCount>
    </LikeButtonContainer>
  );
};

export default LikeButton;

const LikeButtonContainer = styled.div<{ type: LikeButtonStyle }>`
  display: flex;
  align-items: center;
  ${({ type }: { type: LikeButtonStyle }) => type === 'VERTICAL' && 'flex-direction: column; width: 4.8rem;'};
`;

const IconWrapper = styled.div<{ type: LikeButtonStyle }>`
  ${({ type }: { type: LikeButtonStyle }) =>
    type === 'VERTICAL' ? `width: 2rem; height: 2rem;` : `width: 1.4rem; height: 1.4rem;`};
`;

const LikeCount = styled.p<{ type: LikeButtonStyle }>`
  text-align: center;
  color: ${colors.black};

  ${({ type }: { type: LikeButtonStyle }) =>
    type === 'VERTICAL'
      ? `font-size: 1.2rem; line-height: 1.8rem; letter-spacing: -0.03rem; font-weight: 500; margin-left: 0;`
      : `font-size: 1.4rem; line-height: 2.1rem; letter-spacing: -0.03rem; font-weight: 500; margin-left: 1.2rem;`};
`;
