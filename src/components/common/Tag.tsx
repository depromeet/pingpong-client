import type { PropsWithChildren } from 'react';

import { TagStyleClass, TagStyleType } from '@/constants/components';

export interface TagProps {
  styleType?: keyof typeof TagStyleType;
}

const Tag = ({ styleType = TagStyleType.DARK, children }: PropsWithChildren<TagProps>) => {
  return (
    <div className="flex">
      <div className={`${TagStyleClass[styleType]} ${TagStyleClass.DEFAULT}`}>{children}</div>
    </div>
  );
};

export default Tag;
