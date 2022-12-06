import { ArrowIcon } from '../icons';

const Header = ({ title, activeButton }: Header) => {
  return (
    <header className={`flex gap-7 items-center justify-between w-full px-7 sticky top-0 py-[5%] bg-bg-gray`}>
      <button className="w-[20px] h-[20px]">
        <ArrowIcon color="black" direction="right" className="w-[9px] h-[18px]" />
      </button>
      <h1 className="text-t3">{title}</h1>
      {activeButton && <span className="text-primary-blue text-button">{activeButton}</span>}
    </header>
  );
};

export default Header;
