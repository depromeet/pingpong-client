import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { popupAtom, tabAtomFamily } from '@/store/components';
import type { TagProps } from '@/store/components/types';
import type { PopupProps } from '@/typings/common';

// TODO: 해당 카테고리 전체에 해당하는 값을 id=999로 사용함. 이후 전체를 의미하는 값을 따로 가지도록 변경 필요
interface UseTagProps {
  key: string;
  id: number;
  selectingNumber?: number;
}

const POPUP_INFO = {
  isShowing: true,
  title: '최대 5개까지 선택할 수 있어요',
  confirmText: '확인',
};

/** TODO: 추후 수정 필요
 * 로직을 recoil 안에다 작성하려다가 밖으로 빼서 작성하였는데 key 관리 관련해서 문제가 있습니다.
 * 추후에 해당 로직을 recoil 안에다 작성하는 것이 유지보수 측면에서 유리할 듯 합니다.
 */

const useTag = ({ key, id, selectingNumber = 1 }: UseTagProps) => {
  const [selectedTag, setSelectedTag] = useRecoilState<TagProps[]>(tabAtomFamily(key));
  const [clicked, setClicked] = useState(false);
  //* TODO: 팝업 관련 로직 수정 필요
  const setPopup = useSetRecoilState<PopupProps | null>(popupAtom);

  useEffect(() => {
    if (selectedTag.some((tab) => tab.id === id)) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [id, selectedTag]);

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      const { id: clickedTagId, innerHTML: clickedTagName } = event.currentTarget;
      const clickedTag = { id: Number(clickedTagId), name: clickedTagName };

      const isClickedTag = selectedTag.some((tab) => tab.id === Number(clickedTagId));
      const isMoreSelect = selectedTag.length < selectingNumber;
      const isPopup = selectingNumber === 5 && selectedTag.length === 5 && !isClickedTag;

      if (isPopup) {
        setPopup(POPUP_INFO);
      }

      if (!isClickedTag && isMoreSelect) {
        setSelectedTag((prev) => [...prev, clickedTag]);
      } else {
        setSelectedTag(() => {
          return selectingNumber === 1
            ? selectedTag[0].id === Number(clickedTagId)
              ? selectedTag.filter((tab) => tab.id !== Number(clickedTagId))
              : [clickedTag]
            : selectedTag.filter((tab) => tab.id !== Number(clickedTagId));
        });
      }
    },
    [selectedTag, selectingNumber, setPopup, setSelectedTag],
  );

  return { onClick, clicked };
};

export default useTag;
