import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { popupAtom, tabAtomFamily } from '@/store/components';
import type { TabProps } from '@/store/components/types';
import type { PopupProps } from '@/typings/common';

// TODO: 해당 카테고리 전체에 해당하는 값을 id=999로 사용함. 이후 전체를 의미하는 값을 따로 가지도록 변경 필요
interface UseTabProps {
  key: string;
  id: number;
  selectingNumber?: number;
}

const POPUP_INFO = {
  title: '최대 5개까지 선택할 수 있어요',
  confirmText: '확인',
};

/** TODO: 추후 수정 필요
 * 로직을 recoil 안에다 작성하려다가 밖으로 빼서 작성하였는데 key 관리 관련해서 문제가 있습니다.
 * 추후에 해당 로직을 recoil 안에다 작성하는 것이 유지보수 측면에서 유리할 듯 합니다.
 */

// TODO: useTab example 추가하기
const useTab = ({ key, id, selectingNumber = 1 }: UseTabProps) => {
  const [selectedTab, setSelectedTab] = useRecoilState<TabProps[]>(tabAtomFamily(key));
  const [clicked, setClicked] = useState(false);
  //* TODO: 팝업 관련 로직 수정 필요
  const setPopup = useSetRecoilState<PopupProps | null>(popupAtom);

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
      const isPopup = selectingNumber === 5 && selectedTab.length === 5 && !isClickedTab;

      if (isPopup) {
        setPopup(POPUP_INFO);
      }

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
    [selectedTab, selectingNumber, setPopup, setSelectedTab],
  );

  return { onClick, clicked };
};

export default useTab;
