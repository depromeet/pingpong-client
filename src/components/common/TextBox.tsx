import type { PropsWithChildren } from 'react';

const TextBox = ({
  disabled,
  children,
}: PropsWithChildren<{
  disabled?: boolean;
}>) => {
  return (
    <div
      className={`px-[16px] py-[12.5px] rounded-xl whitespace-pre-wrap ${
        disabled
          ? 'bg-bg-gray border border-gray-100 text-gray-300 text-b3'
          : 'bg-bg-gray border border-gray-100 text-b2 text-gray-500'
      }`}
    >
      {children}
    </div>
  );
};

export default TextBox;
