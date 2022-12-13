import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import useNextPage from '@/hooks/useNextPage';
import { talentRegisterOrderAtom } from '@/store/components';

import Button from '../common/Button';
import TextInput from '../common/TextInput';
import TextSelectInput from '../common/TextSelectInput';
import TextTextarea from '../common/TextTextarea';

const CATEGORY = {
  SHARE: {
    key: 'category',
    href: '/talent/register/share/category',
    title: '어떤 재능을 나누고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    selectedInputList: [''],
    required: true,
    className: 'mb-[28px]',
  },
  EXCHANGE: {
    key: 'category',
    href: '/talent/register/exchange/category',
    title: '어떤 재능을 주고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    selectedInputList: [''],
    required: true,
    className: 'mb-[28px]',
  },
};

const TITLE = {
  key: 'title',
  title: '게시글 제목',
  explanation: '',
  placeholder: '최대 30자 까지 입력이 가능해요.',
  htmlFor: 'title',
  showCount: true,
  maxLength: 30,
  error: '최대 30자까지 입력이 가능해요.',
  required: true,
  className: 'mb-[16px]',
};

const EXPLANATION = {
  SHARE: {
    key: 'explanation',
    title: '상세 설명',
    explanation: '나누고 싶은 재능에 대해 설명해 주세요.',
    placeholder: '최대 300자 까지 입력이 가능해요.',
    htmlFor: 'explanation',
    maxLength: 300,
    error: '최대 300자까지 입력이 가능해요.',
    required: true,
    className: 'mb-[16px]',
  },
  EXCHANGE: {
    key: 'explanation',
    title: '상세 설명',
    explanation: '주고 싶은 재능에 대해 설명해 주세요.',
    placeholder: '최대 300자 까지 입력이 가능해요.',
    htmlFor: 'explanation',
    maxLength: 300,
    error: '최대 300자까지 입력이 가능해요.',
    required: true,
    className: 'mb-[16px]',
  },
};

const LINK1 = {
  key: 'link1',
  title: '링크',
  explanation: '재능을 보여줄 수 있는 링크가 있다면 입력해 주세요.(선택)',
  placeholder: '링크를 입력해주세요.',
  htmlFor: 'link',
};

const LINK2 = {
  key: 'link2',
  placeholder: '링크를 입력해주세요.',
};

const LINK3 = {
  key: 'link3',
  placeholder: '링크를 입력해주세요.',
  className: 'mb-[28px]',
};

const CHAT_LINK = {
  key: 'chatLink',
  title: '오픈채팅 링크',
  explanation: '카카오톡에서 오픈채팅 생성 후 링크를 붙여넣어 주세요.',
  placeholder: '링크를 입력해주세요.',
  htmlFor: 'openChatLink',
  required: true,
  className: 'mb-[24px]',
};

const TalentRegisterFormOne = ({ className, sort }: TalentRegisterProps) => {
  const { handleOrder: onClick } = useNextPage(talentRegisterOrderAtom);

  return (
    <form className={`${className} px-[16px] py-[24.5px]`}>
      <TextSelectInput option={CATEGORY[sort]} />
      <TextInput option={TITLE} />
      <TextTextarea option={EXPLANATION[sort]} />
      <TextInput option={LINK1} />
      <TextInput option={LINK2} />
      <TextInput option={LINK3} />
      <TextInput option={CHAT_LINK} />
      <Button type="button" onClick={onClick} className="w-full">
        다음
      </Button>
    </form>
  );
};

export default TalentRegisterFormOne;
