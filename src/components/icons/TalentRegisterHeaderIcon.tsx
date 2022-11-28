import type { InternalSvgProps } from '../common/Svg';
import Svg from '../common/Svg';

const TalentRegisterHeaderIcon = ({ className }: Partial<InternalSvgProps>) => {
  return (
    <Svg width={375} height={213} viewBox={[0, 0, 375, 213]} color={'none'} className={className}>
      <path
        opacity="0.6"
        d="M390 212.054C400.5 174.107 386.553 70.2362 273.183 128.286C285.5 84.2634 246.5 30.134 187.81 72.4312"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M78 78.2363C60.5778 66.7993 16.5867 53.1404 -20 90" stroke="white" strokeLinecap="round" />
      <circle cx="182.5" cy="78.5" r="2.5" fill="#F3F3F3" />
      <circle cx="312.5" cy="101.5" r="2.5" fill="#F3F3F3" />

      <defs>
        <clipPath id="clip0_494_22698">
          <rect width="375" height="44" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default TalentRegisterHeaderIcon;
