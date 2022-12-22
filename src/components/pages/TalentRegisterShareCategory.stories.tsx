import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image';
import { RecoilRoot, useRecoilValue } from 'recoil';

import TalentRegisterShareCategory from '@/pages/talent/register/share/category';
import { talentRegisterOrderAtom } from '@/store/components';

import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import Arrow from '../icons/Arrow';
import TalentRegisterCategoryTabList from '../talentRegister/TalentRegisterCategoryTabList';
import TalentRegisterCategoryTagList from '../talentRegister/TalentRegisterCategoryTagList';

export default {
  title: 'Pages/Talent/TalentRegisterShareCategory',
  component: TalentRegisterShareCategory,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TalentRegisterShareCategory>;

const sort = 'SHARE';

const SHARE = {
  src: './images/talentShareCategory.png',
  alt: 'talentShareCategory',
  href: '/talent/register/share',
  contents: ['나누고 싶은 재능을', '1개만 선택해 주세요'],
  contents2: ['', ''],
  textColor: 'text-primary-red',
};

const Template: ComponentStory<typeof TalentRegisterShareCategory> = () => {
  const { src, alt, contents, contents2, textColor } = SHARE;
  const order = useRecoilValue(talentRegisterOrderAtom);

  return (
    <>
      <div className={`relative w-full`}>
        <IconAnchor
          icon={<Arrow direction="right" width={10} height={15} className="absolute left-[16px] top-[60px]" />}
          href=""
        />
        <Image src={src} alt={alt} width={375} height={187} className="w-full z-99" priority />
        <HeaderTitle
          texts={order === 2 ? contents2 : contents}
          textClassName={textColor}
          className="absolute left-[16px] bottom-[15.5px]"
        />
      </div>
      <TalentRegisterCategoryTabList />
      <TalentRegisterCategoryTagList sort={sort} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
