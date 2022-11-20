import type { ImageProps } from 'next/image';
import Image from 'next/image';

export interface ProfileImageProps extends ImageProps {
  size: 'small' | 'medium' | 'large';
}

const imgSize = {
  small: 36,
  medium: 56,
  large: 80,
};

const ProfileImg = ({ size, alt, src }: ProfileImageProps) => {
  return (
    <div className="relative w-fit h-fit">
      <Image alt={alt} src={src} width={imgSize[size]} height={imgSize[size]} className="rounded-full" />
    </div>
  );
};

export default ProfileImg;
