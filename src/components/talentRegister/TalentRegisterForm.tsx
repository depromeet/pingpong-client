import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import useTalentRegisterForm from '@/hooks/useTalentRegisterForm';

const TalentRegisterForm = ({ sort }: TalentRegisterProps) => {
  const TalentRegisterForm = useTalentRegisterForm(sort);

  return <>{TalentRegisterForm}</>;
};

export default TalentRegisterForm;
