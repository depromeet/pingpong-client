import {
  CATEGORY_EXCHANGE,
  CATEGORY_SHARE,
  CHAT_LINK,
  EXPLANATION_EXCHANGE,
  EXPLANATION_SHARE,
  LINK1,
  LINK2,
  LINK3,
  TITLE,
} from '@/constants/talentRegister/talentRegisterFormConstant';
import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';

import Button from '../common/Button';
import TextInput from '../common/TextInput';
import TextSelectInput from '../common/TextSelectInput';
import TextTextarea from '../common/TextTextarea';

const TalentRegisterForm = ({ className, sort }: TalentRegisterProps) => {
  const handleClick = () => {
    console.log('e');
  };

  return (
    <form className={`${className}`}>
      <TextSelectInput option={sort === 'SHARE' ? CATEGORY_SHARE : CATEGORY_EXCHANGE} />
      <TextInput option={TITLE} />
      <TextTextarea option={sort === 'SHARE' ? EXPLANATION_SHARE : EXPLANATION_EXCHANGE} />
      <TextInput option={LINK1} />
      <TextInput option={LINK2} />
      <TextInput option={LINK3} />
      <TextInput option={CHAT_LINK} />
      <Button onClick={handleClick} className="w-full">
        다음
      </Button>
    </form>
  );
};

export default TalentRegisterForm;
