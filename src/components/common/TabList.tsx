import type { TabProps } from 'src/store/components/types';

import Tab from './Tab';

interface TabListProps {
  categoryKey: string;
  list: TabProps[];
}

const TabList = ({ categoryKey, list }: TabListProps) => {
  return (
    <ul className="flex min-w-[375px] overflow-x-scroll">
      {list.map(({ id, name }) => {
        return (
          <li key={id} className="px-[8px] border-b-[1px] w-fit">
            {<Tab categoryKey={categoryKey} id={id} name={name} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TabList;
