import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { categoryAtomFamily } from '@/store/components';
import type { TabProps } from '@/store/components/types';

// TODO: 해당 카테고리 전체에 해당하는 값을 id=999로 사용함. 이후 전체를 의미하는 값을 따로 가지도록 변경 필요
interface UseTabProps {
  key: string;
  id: number;
}

/** TODO: 추후 수정 필요
 * 로직을 recoil 안에다 작성하려다가 밖으로 빼서 작성하였는데 key 관리 관련해서 문제가 있습니다.
 * 추후에 해당 로직을 recoil 안에다 작성하는 것이 유지보수 측면에서 유리할 듯 합니다.
 */

// TODO: useTab example 추가하기
const useTab = ({ key, id }: UseTabProps) => {
  const [selectedTab, setSelectedTab] = useRecoilState<TabProps>(categoryAtomFamily(key));
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    selectedTab.id === id ? setClicked(true) : setClicked(false);
  }, [id, selectedTab]);

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      const { id, innerHTML } = event.currentTarget;
      setSelectedTab(() => {
        return { id: Number(id), name: innerHTML };
      });
    },
    [setSelectedTab],
  );

  return { onClick, clicked };
};

export default useTab;
