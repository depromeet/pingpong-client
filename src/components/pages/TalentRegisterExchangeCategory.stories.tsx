import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';

import TalentRegisterExchangeCategory from '@/pages/talent/register/exchange/category';
import { talentRegisterOrderAtom } from '@/store/components';

import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import Arrow from '../icons/Arrow';
import TalentRegisterCategoryTabList from '../talentRegister/TalentRegisterCategoryTabList';
import TalentRegisterCategoryTagList from '../talentRegister/TalentRegisterCategoryTagList';

export default {
  title: 'Pages/Talent/TalentRegisterExchangeCategory',
  component: TalentRegisterExchangeCategory,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TalentRegisterExchangeCategory>;

const sort = 'EXCHANGE';

const EXCHANGE = {
  src: './images/talentExchangeCategory.png',
  alt: 'talentExchangeCategory',
  contents: ['주고 싶은 재능을', '1개만 선택해 주세요'],
  contents2: ['받고 싶은 재능을', '최대 5개 선택해 주세요'],
  textColor: 'text-primary-blue',
};

const Template: ComponentStory<typeof TalentRegisterExchangeCategory> = () => {
  const { src, alt, contents, contents2, textColor } = EXCHANGE;
  const [order, setOrder] = useRecoilState(talentRegisterOrderAtom);

  useEffect(() => {
    setOrder(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
