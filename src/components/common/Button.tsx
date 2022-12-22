import dynamic from 'next/dynamic';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { ButtonStyleType } from '../../constants/components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: keyof typeof ButtonStyleType;
  hasIcon?: boolean;
  iconName?: string;
  position?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  buttonStyle = ButtonStyleType.PRIMARY,
  type = 'button',
  children,
  disabled = false,
  onClick,
  className,
}: PropsWithChildren<ButtonProps>) => {
  const defaultClass = 'text-button w-full px-24 py-16 h-48 rounded-xl';

  return (
    <button
      type={type}
      className={`btn-${buttonStyle.toLowerCase()} ${defaultClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
