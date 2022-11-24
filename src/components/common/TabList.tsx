import type { TabProps } from 'src/store/components/types';

import Tab from './Tab';

interface TabListProps {
  list: TabProps[];
}

const TabList = ({ list }: TabListProps) => {
  return (
    <ul>
      {list.map(({ id, content }) => {
        return <li key={id}>{<Tab id={id} content={content} />}</li>;
      })}
    </ul>
  );
};

export default TabList;
