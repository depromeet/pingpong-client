import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { tabAtomFamily } from '@/store/components';
import type { TabProps } from '@/store/components/types';

interface UseTabProps {
  key: string;
  id: number;
  selectingNumber?: number;
}

const useTab = ({ key, id, selectingNumber = 1 }: UseTabProps) => {
  const [selectedTab, setSelectedTab] = useRecoilState<TabProps[]>(tabAtomFamily(key));
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (selectedTab.some((tab) => tab.id === id)) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [id, selectedTab]);

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      const { id: clickedTabId, innerHTML: clickedTabName } = event.currentTarget;
      const clickedTab = { id: Number(clickedTabId), name: clickedTabName };
      const isClickedTab = selectedTab.some((tab) => tab.id === Number(clickedTabId));
      const isMoreSelect = selectedTab.length < selectingNumber;

      if (!isClickedTab && isMoreSelect) {
        setSelectedTab((prev) => [...prev, clickedTab]);
      } else {
        setSelectedTab(() => {
          return selectingNumber === 1
            ? selectedTab[0].id === Number(clickedTabId)
              ? selectedTab.filter((tab) => tab.id !== Number(clickedTabId))
              : [clickedTab]
            : selectedTab.filter((tab) => tab.id !== Number(clickedTabId));
        });
      }
    },
    [selectedTab, selectingNumber, setSelectedTab],
  );

  return { onClick, clicked };
};

export default useTab;
