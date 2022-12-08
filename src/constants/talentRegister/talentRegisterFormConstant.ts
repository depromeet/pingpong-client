export const CATEGORY_SHARE = {
  key: 'category',
  href: 'talent/register/category/share',
  title: '어떤 재능을 나누고 싶나요?',
  explanation: '',
  placeholder: '카테고리를 선택해 주세요.',
  htmlFor: 'category',
  selectedInputList: ['영어'],
  required: true,
  className: 'mb-[28px]',
};

export const CATEGORY_EXCHANGE = {
  key: 'category',
  href: 'talent/register/category/exchange',
  title: '어떤 재능을 주고 싶나요?',
  explanation: '',
  placeholder: '카테고리를 선택해 주세요.',
  htmlFor: 'category',
  selectedInputList: ['영어'],
  required: true,
  className: 'mb-[28px]',
};

export const TITLE = {
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

export const EXPLANATION_SHARE = {
  key: 'explanation',
  title: '상세 설명',
  explanation: '나누고 싶은 재능에 대해 설명해 주세요.',
  placeholder: '최대 300자 까지 입력이 가능해요.',
  htmlFor: 'explanation',
  maxLength: 300,
  // error: '최대 300자까지 입력이 가능해요.',
  required: true,
  className: 'mb-[16px]',
};

export const EXPLANATION_EXCHANGE = {
  key: 'explanation',
  title: '상세 설명',
  explanation: '주고 싶은 재능에 대해 설명해 주세요.',
  placeholder: '최대 300자 까지 입력이 가능해요.',
  htmlFor: 'explanation',
  maxLength: 300,
  // error: '최대 300자까지 입력이 가능해요.',
  required: true,
  className: 'mb-[16px]',
};

export const LINK1 = {
  key: 'link1',
  title: '링크',
  explanation: '재능을 보여줄 수 있는 링크가 있다면 입력해 주세요.(선택)',
  placeholder: '링크를 입력해주세요.',
  htmlFor: 'link',
};

export const LINK2 = {
  key: 'link2',
  placeholder: '링크를 입력해주세요.',
};

export const LINK3 = {
  key: 'link3',
  placeholder: '링크를 입력해주세요.',
  className: 'mb-[28px]',
};

export const CHAT_LINK = {
  key: 'chatLink',
  title: '오픈채팅 링크',
  explanation: '카카오톡에서 오픈채팅 생성 후 링크를 붙여넣어 주세요.',
  placeholder: '링크를 입력해주세요.',
  htmlFor: 'openChatLink',
  required: true,
  className: 'mb-[24px]',
};
