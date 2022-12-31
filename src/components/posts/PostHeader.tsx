import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

import PostHeaderNav from './PostHeaderNav';

interface PostHeaderProps {
  imageUrl: string;
  isMyPost?: boolean;
}

const PostHeader = ({ imageUrl, isMyPost }: PostHeaderProps) => {
  return (
    <HeaderContainer>
      <PostHeaderNav isMyPost={isMyPost} />
      <ImageWrapper className="relative" width="100%" height="18.7rem">
        <Image
          alt="post-header"
          src={imageUrl}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </ImageWrapper>
    </HeaderContainer>
  );
};

export default PostHeader;

const HeaderContainer = styled.div`
  position: relative;
`;

interface ImageWrapperProps {
  width: string;
  height: string;
  bgColor?: string;
}
const ImageWrapper = styled.div<ImageWrapperProps>`
  ${({ width, height, bgColor = colors.primaryBlue }: ImageWrapperProps) =>
    `width: ${width}; height: ${height}; background-color: ${bgColor}`}
`;
