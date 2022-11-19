import Tab from 'src/components/common/Tab';

interface ITabList {
  list: string[];
}

const TabList = ({ list }: ITabList) => {
  return (
    <ul>
      {list.map((content) => {
        return (
          <li key={content}>
            <Tab content={content} />
          </li>
        );
      })}
    </ul>
  );
};

export default TabList;
