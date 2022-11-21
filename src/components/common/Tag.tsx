import type { PropsWithChildren } from 'react';

import { TagStyleType } from '../../constants/components';

export interface TagProps {
  styleType?: keyof typeof TagStyleType;
}

const Tag = ({ styleType = TagStyleType.DARK, children }: PropsWithChildren<TagProps>) => {
  return (
    <div className="flex">
      <div className={`tag-${styleType.toLowerCase()} text-b4 px-10 py-4 rounded-full`}>{children}</div>
    </div>
  );
};

export default Tag;
