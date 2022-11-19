import dynamic from 'next/dynamic';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  hasIcon?: boolean;
  iconName?: string;
  position?: string;
  clickHandler: () => void;
}

const Button = ({
  buttonStyle = 'primary',
  hasIcon = false,
  iconName = 'arrow-right',
  position = 'right',
  children,
  clickHandler,
}: PropsWithChildren<ButtonProps>) => {
  const DynamicIcon = dynamic(() => import(`../../../public/icons/${iconName}.svg`));

  const primaryButtonClass = 'text-white bg-black disabled:bg-color-gray-500';
  const secondaryButtonClass = 'text-black bg-white';
  const defaultButtonClass = 'px-3 py-2 rounded-xl';

  const getButtonClass = () => {
    return `${buttonStyle === 'primary' ? primaryButtonClass : secondaryButtonClass} ${defaultButtonClass}`;
  };

  return (
    <div className="flex">
      {position === 'right' ? (
        <button className={`${getButtonClass()}`} onClick={clickHandler}>
          {children}
          {hasIcon && <DynamicIcon />}
        </button>
      ) : (
        <button className={`${getButtonClass()}`} onClick={clickHandler}>
          {hasIcon && <DynamicIcon />}
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
