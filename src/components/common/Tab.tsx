import { useSetRecoilState } from 'recoil';
import tabAtom from 'src/store/tab/atom';

interface ITabName {
  content: string;
}

const Tab = ({ content }: ITabName) => {
  const setSelectedTabs = useSetRecoilState<string>(tabAtom);

  const handleClicked = (event: React.MouseEvent) => {
    const clickedTab = event.currentTarget.innerHTML;
    setSelectedTabs(clickedTab);
  };

  return (
    <button onClick={handleClicked} className="text-button">
      {content}
    </button>
  );
};

export default Tab;
