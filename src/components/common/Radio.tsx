import { memo } from 'react';

type Props = {
  isOn: boolean;
  onClick: () => void;
};

const Toggle = ({ isOn, onClick }: Props) => {
  return (
    <button
      className={`w-[52px] h-[32px] rounded-[16px] relative ${isOn ? 'bg-primary-blue' : 'bg-gray-200'}`}
      onClick={onClick}
    >
      <span className="hidden">on/off toggle 버튼</span>
      <button
        className={`absolute w-[28px] h-[28px] bg-white rounded-full top-[2px] ${isOn ? 'right-[2px]' : 'left-[2px]'}`}
      />
    </button>
  );
};

export default memo(Toggle);
