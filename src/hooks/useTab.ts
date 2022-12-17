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

/** TODO: 추후 수정 필요
 * 로직을 recoil 안에다 작성하려다가 밖으로 빼서 작성하였는데 key 관리 관련해서 문제가 있습니다.
 * 추후에 해당 로직을 recoil 안에다 작성하는 것이 유지보수 측면에서 유리할 듯 합니다.
 */

// TODO: useTab example 추가하기
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
