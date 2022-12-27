import type { TabProps } from 'src/store/components/types';

import Tab from './Tab';

interface TabListProps {
  categoryKey: string;
  list: TabProps[];
  mainCategoryName?: string;
}

const TabList = ({ categoryKey, list, mainCategoryName }: TabListProps) => {
  return (
    <ul className="flex min-w-[375px] overflow-x-scroll border-b-[1px] pl-8 mb-12">
      {mainCategoryName && (
        <li key="ALL" className="px-[10px] w-fit">
          {<Tab categoryKey={categoryKey} id="ALL" name={`${mainCategoryName} 전체`} />}
        </li>
      )}
      {list.map(({ id, name }) => {
        return (
          <li key={id} className="px-[10px] w-fit">
            {<Tab categoryKey={categoryKey} id={id} name={name} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TabList;
