import type { ImageProps } from 'next/image';
import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/constants/styles';

export interface CircleImageProps extends Partial<ImageProps> {
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  bgColor?: string;
}

const imgSize = {
  small: '3.6rem',
  medium: '5.6rem',
  large: '6.4rem',
  xlarge: '8rem',
  xxlarge: '9.6rem',
};

const defaultImgSrc = '/images/empty-profile.png';

const CircleImg = ({
  size = 'small',
  alt = 'profile-image',
  src = defaultImgSrc,
  bgColor = colors.gray100,
}: CircleImageProps) => {
  return (
    <ImageWrapper className="relative rounded-full" width={imgSize[size]} height={imgSize[size]} bgColor={bgColor}>
      <Image
        alt={alt}
        src={src}
        fill
        className="rounded-full"
        sizes="30vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </ImageWrapper>
  );
};

export default CircleImg;

interface ImageWrapperProps {
  width: string;
  height: string;
  bgColor?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  ${({ width, height, bgColor }: ImageWrapperProps) =>
    `width: ${width}; height: ${height}; background-color: ${bgColor}`}
`;
