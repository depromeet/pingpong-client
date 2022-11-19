import { useRecoilState } from 'recoil';
import tabAtom from 'src/store/tab/atom';

interface ITabName {
  content: string;
}

const Tab = ({ content }: ITabName) => {
  const [selectedTabs, setSelectedTabs] = useRecoilState<string[]>(tabAtom);

  const handleClicked = (event: React.MouseEvent) => {
    const clickedTab = event.currentTarget.innerHTML;

    if (selectedTabs.includes(clickedTab)) {
      const newSelectedTabs = selectedTabs.filter((selectedTab) => selectedTab !== clickedTab);
      setSelectedTabs([...newSelectedTabs]);
    } else {
      setSelectedTabs([...selectedTabs, clickedTab]);
    }
  };

  return (
    <button onClick={handleClicked} className="text-button">
      {content}
    </button>
  );
};

export default Tab;
