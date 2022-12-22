import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import TalentRegisterShare from '@/pages/talent/register/share';
import { tabAtomFamily } from '@/store/components';

import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import { XIcon } from '../icons/XIcon';
import TalentRegisterForm from '../talentRegister/TalentRegisterForm';

export default {
  title: 'Pages/Talent/TalentRegisterShare',
  component: TalentRegisterShare,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TalentRegisterShare>;

const SORT = 'SHARE';

const SHARE = {
  src: './images/talentShare.png',
  alt: 'talentShare',
  contents: ['나누고 싶은 재능에 대해', '알려주세요'],
};

const Template: ComponentStory<typeof TalentRegisterShare> = () => {
  const { src, alt, contents } = SHARE;
  const setSubCategory = useSetRecoilState(tabAtomFamily('subCategoryId'));

  useEffect(() => {
    setSubCategory([{ id: 0, name: '프론트엔드' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <div className={`relative w-full `}>
        <IconAnchor
          icon={<XIcon className="absolute right-[16px] top-[60px]" />}
          href="/talent/register/exchange/category"
        />
        <Image src={src} alt={alt} width={375} height={187} className="w-full z-99" priority />
        <HeaderTitle texts={contents} textClassName="text-gray-100" className="absolute left-[16px] bottom-[15.5px]" />
      </div>
      <TalentRegisterForm sort={SORT} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
