import type { PropsWithChildren } from 'react';

const TextBox = ({
  disabled,
  children,
}: PropsWithChildren<{
  disabled?: boolean;
}>) => {
  return (
    <div
      className={`px-[16px] py-[12.5px] rounded-xl ${
        disabled ? 'bg-gray-100 text-gray-400 text-b3' : 'bg-bg-gray border border-gray-100 text-b2 text-gray-500'
      }`}
    >
      {children}
    </div>
  );
};

export default TextBox;
