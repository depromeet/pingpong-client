import type { ImageProps } from 'next/legacy/image';
import Image from 'next/legacy/image';

export interface IImageProps extends ImageProps {
  size: 'small' | 'medium' | 'large';
}

interface IOption {
  option: IImageProps;
}

const imgSize = {
  small: 36,
  medium: 56,
  large: 80,
};

const ProfileImg = ({ option: { size, alt, src } }: IOption) => {
  return (
    <div className="relative w-fit h-fit">
      <Image alt={alt} src={src} width={imgSize[size]} height={imgSize[size]} className="rounded-full" />
    </div>
  );
};

export default ProfileImg;
