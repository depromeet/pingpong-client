import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import useGetCategory from '@/hooks/useGetCategory';
import { tabAtomFamily } from '@/store/components';
import type { CategoryProps } from '@/typings/common';

import Button from '../common/Button';
import ClickTagList from '../common/ClickTagList';
import TalentRegisterCategoryBottomSheet from '../talentRegister/TalentRegisterCategoryBottomSheet';

//* TODO: 기존 TalentRegisterCategoryTagList가 재능 등록에 대한 부분을 특정해 만들어져서
//* 프로필 편집 부분에 적합하지 않은 로직이 존재함으로 새로우 컴포넌트를 만들었습니다.
//* 추후 리팩토링 과정을 통해 하나의 컴포넌트로 합칠 수 있을 거 같습니다.

interface MidAndSubCategoriesProps extends CategoryProps {
  subCategories: CategoryProps[];
}

interface ProfileCategoryTagListProps {
  categoryKey: string;
  className?: string;
}

const ProfileCategoryTagList = ({ categoryKey, className }: ProfileCategoryTagListProps) => {
  const [{ id }] = useRecoilValue(tabAtomFamily('mainCategory'));
  const selectedTab = useRecoilValue(tabAtomFamily(categoryKey));
  const { isSuccess, data } = useGetCategory({
    sort: 'mid',
    type: 'mainCategoryId',
    categoryId: id || 1,
  });

  const href = '/profile/edit';

  const onClick = () => {
    return;
  };

  return (
    <form className={`${className} px-[16px]`}>
      {isSuccess &&
        data.data.map(({ id, name, subCategories }: MidAndSubCategoriesProps) => {
          return (
            <div key={id}>
              <span className="text-t4 text-gray-600">{name}</span>
              <ClickTagList
                key={id}
                categoryKey={categoryKey}
                list={subCategories}
                sort={'EXCHANGE'}
                className={'pt-[8px] pb-[20px]'}
              />
            </div>
          );
        })}
      <TalentRegisterCategoryBottomSheet sort={'EXCHANGE'} categoryKey={categoryKey}>
        <Link href={href} className="block">
          <Button type="button" onClick={onClick} disabled={selectedTab.length === 0} className="w-full">
            선택 완료
          </Button>
        </Link>
      </TalentRegisterCategoryBottomSheet>
    </form>
  );
};

export default ProfileCategoryTagList;
