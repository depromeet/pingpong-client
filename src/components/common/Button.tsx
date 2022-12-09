import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { ButtonStyleType } from '../../constants/components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: keyof typeof ButtonStyleType;
  hasIcon?: boolean;
  iconName?: string;
  position?: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const Button = ({
  buttonStyle = ButtonStyleType.PRIMARY,
  type,
  // hasIcon = false,
  // iconName = 'arrow-right',
  position = 'right',
  children,
  disabled = false,
  onClick,
  className,
}: PropsWithChildren<ButtonProps>) => {
  // TODO: storybook 내에서 svg import 가 안되는 이슈 발생하여 해결중
  // const DynamicIcon = dynamic(() => import(`../../../public/icons/${iconName}.svg`));
  const defaultClass = 'text-button px-24 py-16 rounded-xl';

  return (
    <div className="flex w-full">
      {position === 'right' ? (
        <button
          type={type}
          className={`btn-${buttonStyle.toLowerCase()} ${defaultClass} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
          {/* {hasIcon && <DynamicIcon />} */}
        </button>
      ) : (
        <button
          type={type}
          className={`btn-${buttonStyle.toLowerCase()} ${defaultClass} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {/* {hasIcon && <DynamicIcon />} */}
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
