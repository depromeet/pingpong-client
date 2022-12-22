import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

import { tabAtomFamily, talentRegisterOrderAtom } from '@/store/components';

import TalentRegisterExchange from '../../pages/talent/register/exchange/index';
import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import { XIcon } from '../icons/XIcon';
import TalentRegisterForm from '../talentRegister/TalentRegisterForm';

export default {
  title: 'Pages/Talent/TalentRegisterExchange',
  component: TalentRegisterExchange,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TalentRegisterExchange>;

const SORT = 'EXCHANGE';

const EXCHANGE = {
  src: './images/talentExchange.png',
  alt: 'talentExchange',
  contents: ['주고 싶은 재능에 대해', '알려주세요'],
  contents2: ['받고 싶은 재능에 대해', '알려주세요'],
};

const Template: ComponentStory<typeof TalentRegisterExchange> = () => {
  const { src, alt, contents, contents2 } = EXCHANGE;
  const order = useRecoilValue(talentRegisterOrderAtom);
  const setSubCategory = useSetRecoilState(tabAtomFamily('subCategoryId'));
  const setTakenCategory = useSetRecoilState(tabAtomFamily('takenTalentIds'));

  useEffect(() => {
    setSubCategory([{ id: 0, name: '프론트엔드' }]);
    setTakenCategory([
      { id: 0, name: '프론트엔드' },
      { id: 1, name: '백엔드' },
    ]);
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
        <HeaderTitle
          texts={order === 2 || order == 3 ? contents2 : contents}
          textClassName="text-gray-100"
          className="absolute left-[16px] bottom-[15.5px]"
        />
      </div>
      <TalentRegisterForm sort={SORT} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
