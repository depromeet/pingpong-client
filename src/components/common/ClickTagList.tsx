import type { TagProps } from '@/store/components/types';

import ClickTag from './ClickTag';

interface ClickTagListProps {
  categoryKey: string;
  list: TagProps[];
  sort: 'SHARE' | 'EXCHANGE';
  isDelete?: boolean;
  className?: string;
}

const ClickTagList = ({ categoryKey, list, sort, isDelete = false, className = '' }: ClickTagListProps) => {
  return (
    <ul className={`${className} flex flex-wrap`}>
      {list.map(({ id, name }) => {
        return (
          <li key={id} className="pr-[8px]">
            {
              <ClickTag
                categoryKey={categoryKey}
                id={id}
                name={name}
                sort={sort}
                isDelete={isDelete}
                className={'mb-[8px]'}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export default ClickTagList;
