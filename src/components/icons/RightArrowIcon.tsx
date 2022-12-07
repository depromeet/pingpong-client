import type { InternalSvgProps } from '../common/Svg';
import Svg from '../common/Svg';

export const RightArrowIcon = ({ ...props }: Partial<InternalSvgProps>) => {
  return (
    <Svg viewBox={[0, 0, 9, 14]} width={9} height={14} color={'none'} {...props}>
      <path d="M1.08333 0.583332L7.5 7L1.08333 13.4167" stroke="#CFCFCF" strokeWidth="1.6" strokeLinejoin="round" />;
    </Svg>
  );
};
