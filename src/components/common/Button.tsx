import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  hasIcon?: boolean;
  iconName?: string;
  position?: string;
  disabled?: boolean;
  clickHandler: () => void;
}

const Button = ({
  buttonStyle = 'primary',
  hasIcon = false,
  iconName = 'arrow-right',
  position = 'right',
  children,
  disabled = false,
  clickHandler,
}: PropsWithChildren<ButtonProps>) => {
  // const DynamicIcon = dynamic(() => import(`../../../public/icons/${iconName}.svg`));

  const primaryButtonClass = 'text-white bg-black disabled:bg-gray-300';
  const secondaryButtonClass = 'text-gray-500 bg-white border border-gray-500 disabled:text-gray-300 border-gray-300';
  const defaultButtonClass = 'text-button px-24 py-16 rounded-xl';

  const getButtonClass = () => {
    return `${buttonStyle === 'primary' ? primaryButtonClass : secondaryButtonClass} ${defaultButtonClass}`;
  };

  return (
    <div className="flex">
      {position === 'right' ? (
        <button className={`${getButtonClass()}`} onClick={clickHandler} disabled={disabled}>
          {children}
          {/* {hasIcon && <DynamicIcon />} */}
        </button>
      ) : (
        <button className={`${getButtonClass()}`} onClick={clickHandler} disabled={disabled}>
          {/* {hasIcon && <DynamicIcon />} */}
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
