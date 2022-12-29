import { useRouter } from 'next/router';

import type { HeaderProps } from '@/typings/common';

import { ArrowIcon } from '../icons';

const Header = ({ title, onArrowClick, activeButton, className, onActiveButtonClick }: HeaderProps) => {
  const router = useRouter();

  const handleArrowClick = () => {
    router.back();
    onArrowClick && onArrowClick();
  };

  const handleActiveButtonClick = () => {
    onActiveButtonClick && onActiveButtonClick();
  };

  return (
    <header
      className={`flex gap-7 items-center w-full px-7 sticky top-0 py-[5%] bg-bg-gray z-30 ${
        activeButton ? 'justify-between' : ''
      } ${className}`}
    >
      <button className={`w-[20px] h-[20px] ${activeButton ? 'left-0' : 'absolute'}`} onClick={handleArrowClick}>
        <ArrowIcon color="black" direction="right" className="w-[9px] h-[18px]" />
      </button>
      <h1 className={`text-t3 ${activeButton ? '' : 'w-full text-center'}`}>{title}</h1>
      {activeButton && (
        <span onClick={handleActiveButtonClick} className="text-primary-blue text-button">
          {activeButton}
        </span>
      )}
    </header>
  );
};

export default Header;
