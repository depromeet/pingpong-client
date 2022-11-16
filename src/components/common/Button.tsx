import { PropsWithChildren } from 'react';

const Button = ({ primary, children }: PropsWithChildren<{ primary: boolean }>) => {
  return (
    <div className="flex">
      <button className="text-white bg-black rounded-full">{children}</button>
    </div>
  );
};

export default Button;
