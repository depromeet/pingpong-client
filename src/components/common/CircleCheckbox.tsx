import type { DefaultProps } from '@/typings/common';

import { CheckIcon } from '../icons';

interface Props {
  checked: boolean;
  onClick: () => void;
}

const CircleCheckbox = ({ checked, onClick }: Props) => {
  return (
    <div
      className={`flex items-center justify-center w-[16px] h-[16px] p-2 cursor-pointer rounded-full ${
        checked ? 'bg-primary-blue' : 'bg-[#D4D4D5]'
      }`}
      onClick={onClick}
    >
      <input type="checkbox" className={`hidden`} checked={checked} readOnly />
      <CheckIcon color="white" />
    </div>
  );
};

export default CircleCheckbox;
