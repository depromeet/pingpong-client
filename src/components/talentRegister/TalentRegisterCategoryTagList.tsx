import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import useCategoriesQuery from '@/hooks/queries/useCategoriesQuery';
import { SetTalnetRegisterCategorySelectInputKey } from '@/lib/utils';
import { categoryAtomFamily, tabAtomFamily } from '@/store/components';
import type { MidCategory } from '@/typings/common';

import Button from '../common/Button';
import ClickTagList from '../common/ClickTagList';
import TalentRegisterCategoryBottomSheet from './TalentRegisterCategoryBottomSheet';

const TalentRegisterCategoryTagList = ({ sort, className }: TalentRegisterProps) => {
  const { id } = useRecoilValue(categoryAtomFamily('mainCategory'));

  const categoryKey = SetTalnetRegisterCategorySelectInputKey();
  const selectedTab = useRecoilValue(tabAtomFamily(categoryKey));

  const {
    midCategoryQuery: { isSuccess, data },
  } = useCategoriesQuery({
    mainCategoryId: id || 1,
  });

  const href = sort === 'SHARE' ? '/talent/register/share' : '/talent/register/exchange';

  const onClick = () => {
    return;
  };

  return (
    <form className={`${className} px-[16px]`}>
      <div>
        {isSuccess &&
          data.map(({ id, name, subCategories }: MidCategory) => {
            return (
              <div key={id}>
                <span className="text-t4 text-gray-600">{name}</span>
                <ClickTagList
                  key={`taglist-${id}`}
                  categoryKey={categoryKey}
                  list={subCategories}
                  sort={sort}
                  className={'pt-[8px] pb-[20px]'}
                />
              </div>
            );
          })}
      </div>
      <TalentRegisterCategoryBottomSheet sort={sort} categoryKey={categoryKey}>
        <Link href={href} className="block">
          <Button type="button" onClick={onClick} disabled={selectedTab.length === 0} className="w-full">
            선택 완료
          </Button>
        </Link>
      </TalentRegisterCategoryBottomSheet>
    </form>
  );
};

export default TalentRegisterCategoryTagList;
