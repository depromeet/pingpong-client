import type { InternalSvgProps } from '../common/Svg';
import Svg from '../common/Svg';

export const TalentRegisterIcon = ({ ...props }: Partial<InternalSvgProps>) => {
  return (
    <Svg viewBox={22} size={22} color="#CFCFCF" {...props}>
      <path d="M15.3203 9.56412H12.4359V6.67972C12.4359 5.88711 11.7927 5.24384 11.0001 5.24384C10.2075 5.24384 9.56418 5.88711 9.56418 6.67972V9.56412H6.67978C5.88717 9.56412 5.2439 10.2074 5.2439 11C5.2439 11.7926 5.88717 12.4359 6.67978 12.4359H9.56418V15.3203C9.56418 16.1129 10.2075 16.7562 11.0001 16.7562C11.7927 16.7562 12.4359 16.1129 12.4359 15.3203V12.4359H15.3203C16.1129 12.4359 16.7562 11.7926 16.7562 11C16.7562 10.2074 16.1129 9.56412 15.3203 9.56412Z" />
      <path d="M13.9062 0H8.09378C3.63106 0 0 3.63106 0 8.09378V13.9062C0 18.3689 3.63106 22 8.09378 22H13.9062C18.3689 22 22 18.3689 22 13.9062V8.09378C22 3.63106 18.3689 0 13.9062 0ZM19.1282 13.9062C19.1282 16.786 16.786 19.1282 13.9062 19.1282H8.09378C5.21397 19.1282 2.87176 16.786 2.87176 13.9062V8.09378C2.87176 5.21397 5.21397 2.87176 8.09378 2.87176H13.9062C16.786 2.87176 19.1282 5.21397 19.1282 8.09378V13.9062Z" />
    </Svg>
  );
};
