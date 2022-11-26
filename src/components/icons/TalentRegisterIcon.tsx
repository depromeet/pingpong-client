import type { InternalSvgProps } from '../common/Svg';
import Svg from '../common/Svg';

export const TalentRegisterIcon = ({ ...props }: Partial<InternalSvgProps>) => {
  return (
    <Svg viewBox={20} size={20} color="#AFAFAF" {...props}>
      <path d="M9.625 1.375C14.1625 1.375 17.875 5.0875 17.875 9.625C17.875 14.1625 14.1625 17.875 9.625 17.875C5.0875 17.875 1.375 14.1625 1.375 9.625C1.375 5.0875 5.0875 1.375 9.625 1.375ZM9.625 0C4.33125 0 0 4.33125 0 9.625C0 14.9188 4.33125 19.25 9.625 19.25C14.9188 19.25 19.25 14.9188 19.25 9.625C19.25 4.33125 14.9188 0 9.625 0Z" />
      <path d="M15.125 8.9375H10.3125V4.125H8.9375V8.9375H4.125V10.3125H8.9375V15.125H10.3125V10.3125H15.125V8.9375Z" />
    </Svg>
  );
};
