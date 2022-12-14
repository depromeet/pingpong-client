import type { InternalSvgProps } from '../common/Svg';
import Svg from '../common/Svg';

export const XIcon = ({ ...props }: Partial<InternalSvgProps>) => {
  return (
    <Svg viewBox={18} size={18} {...props}>
      <path
        d="M1.71447 0.666672L0.666992 1.71415L8.08694 9.13409L0.935141 16.2859L1.98262 17.3334L9.13441 10.1816L16.018 17.0652L17.0655 16.0177L10.1819 9.13409L17.3337 1.98232L16.2862 0.934846L9.13441 8.08662L1.71447 0.666672Z"
        fill="white"
      />
      <path
        d="M1.71447 0.666672L0.666992 1.71415L8.08694 9.13409L0.935141 16.2859L1.98262 17.3334L9.13441 10.1816L16.018 17.0652L17.0655 16.0177L10.1819 9.13409L17.3337 1.98232L16.2862 0.934846L9.13441 8.08662L1.71447 0.666672Z"
        fill="white"
      />
    </Svg>
  );
};
