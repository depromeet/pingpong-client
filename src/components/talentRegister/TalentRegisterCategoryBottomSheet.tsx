import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import { tabAtomFamily } from '@/store/components';

import ClickTagList from '../common/ClickTagList';

interface TalentRegisterCategoryBottomSheetProps {
  sort: 'SHARE' | 'EXCHANGE';
  categoryKey: string;
  className?: string;
}

const TalentRegisterCategoryBottomSheet = ({
  sort,
  categoryKey,
  children,
  className,
}: PropsWithChildren<TalentRegisterCategoryBottomSheetProps>) => {
  const selectedTab = useRecoilValue(tabAtomFamily(categoryKey));

  return (
    <>
      {selectedTab.length === 0 ? (
        <div className="fixed left-0 bottom-0 w-full px-[16px] py-[20px]">{children}</div>
      ) : (
        <div className={`w-full bg-[#FAFAFA] fixed left-0 bottom-0 z-10 px-[16px] py-[20px] ${className}`}>
          <span className="text-t4 text-gray-600">선택한 재능 카테고리</span>
          <ClickTagList
            categoryKey={categoryKey}
            list={selectedTab}
            sort={sort}
            isDelete={true}
            className={'pt-[8px] pb-[20px]'}
          />
          {children}
        </div>
      )}
    </>
  );
};
export default TalentRegisterCategoryBottomSheet;
