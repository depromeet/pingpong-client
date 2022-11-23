import type { PropsWithChildren } from 'react';

import IconClose from '../../../public/icons/arrow-left.svg';

export interface ChipProps {
  handleClick: () => void;
}

const Chip = ({ children, handleClick }: PropsWithChildren<ChipProps>) => {
  return (
    <div className="flex">
      <button className={'bg-black'} onClick={handleClick}>
        {children}
        <IconClose />
      </button>
    </div>
  );
};

export default Chip;
