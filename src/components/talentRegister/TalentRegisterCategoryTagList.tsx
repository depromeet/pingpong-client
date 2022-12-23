import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import useGetCategory from '@/hooks/useGetCategory';
import { SetTalnetRegisterCategorySelectInputKey } from '@/lib/utils';
import { tabAtomFamily } from '@/store/components';
import type { CategoryProps } from '@/typings/common';

import Button from '../common/Button';
import ClickTagList from '../common/ClickTagList';
import TalentRegisterCategoryBottomSheet from './TalentRegisterCategoryBottomSheet';

interface MidAndSubCategoriesProps extends CategoryProps {
  subCategories: CategoryProps[];
}

const TalentRegisterCategoryTagList = ({ sort, className }: TalentRegisterProps) => {
  const [{ id }] = useRecoilValue(tabAtomFamily('mainCategory'));
  const categoryKey = SetTalnetRegisterCategorySelectInputKey();
  const selectedTab = useRecoilValue(tabAtomFamily(categoryKey));
  const { isSuccess, data } = useGetCategory({
    sort: 'mid',
    query: 'mainCategoryId',
    categoryId: id || 1,
  });

  const href = sort === 'SHARE' ? '/talent/register/share' : '/talent/register/exchange';

  const onClick = () => {
    return;
  };

  return (
    <form className={`${className} px-[16px] py-[24.5px]`}>
      {isSuccess &&
        data.data.map(({ id, name, subCategories }: MidAndSubCategoriesProps) => {
          return (
            <div key={id}>
              <span className="text-t4 text-gray-600">{name}</span>
              <ClickTagList
                key={id}
                categoryKey={categoryKey}
                list={subCategories}
                sort={sort}
                className={'pt-[8px] pb-[20px]'}
              />
            </div>
          );
        })}
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
