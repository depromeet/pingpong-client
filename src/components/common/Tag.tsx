import type { PropsWithChildren } from 'react';

import { TagStyleType } from '../../constants/components';

export interface TagProps {
  styleType?: keyof typeof TagStyleType;
  color?: 'blue' | 'red';
  className?: string;
}

const Tag = ({ styleType = TagStyleType.DARK, color = 'blue', children, className }: PropsWithChildren<TagProps>) => {
  const isBlue = color === 'blue';

  const transParams = () => {
    switch (styleType) {
      case 'DARK':
        return isBlue ? 'bg-primary-blue text-white' : 'bg-primary-red text-white';
      case 'LIGHT':
        return isBlue ? 'bg-bg-blue text-primary-blue' : 'bg-bg-red text-primary-red';
      case 'OUTLINE':
        return isBlue
          ? 'border border-primary-blue bg-white text-primary-blue'
          : 'border border-primary-red bg-white text-primary-red';
      case 'NONE':
        return 'border border-gray-300 bg-white text-gray-500 text-b2 px-[14px]';
      case 'DISABLED':
        return 'bg-gray-100 text-b3 text-gray-400';
    }
  };

  return (
    <div className="flex">
      <div className={`${transParams()} text-b4 px-10 py-4 rounded-full ${className}`}>{children}</div>
    </div>
  );
};

export default Tag;
