import { useSetRecoilState } from 'recoil';
import { tabAtom } from 'src/store/components/atoms';
import type { TabProps } from 'src/store/components/types';

const Tab = ({ id, content }: TabProps) => {
  const setSelectedTabs = useSetRecoilState<TabProps>(tabAtom);

  const handleClicked = (event: React.MouseEvent) => {
    const { id: clickedTabId, innerHTML: clickedTabContent } = event.currentTarget;
    setSelectedTabs({ id: clickedTabId, content: clickedTabContent });
  };

  return (
    <button id={id} onClick={handleClicked} className="text-button">
      {content}
    </button>
  );
};

export default Tab;
