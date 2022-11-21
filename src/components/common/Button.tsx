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
  // TODO: storybook 내에서 svg import 가 안되는 이슈 발생하여 해결중
  // const DynamicIcon = dynamic(() => import(`../../../public/icons/${iconName}.svg`));

  const primaryButtonClass = 'text-white bg-black disabled:bg-gray-500';
  const secondaryButtonClass = 'text-gray-800 bg-white border border-gray-800 disabled:text-gray-300 border-gray-500';
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
