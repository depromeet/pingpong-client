import TalentRegisterForm from '@/components/talentRegister/TalentRegisterForm';
import TalentRegisterHeader from '@/components/talentRegister/TalentRegisterHeader';

const SORT = 'SHARE';

const TalentRegisterShare = () => {
  return (
    <div className="w-full">
      <TalentRegisterHeader sort={SORT} />
      <TalentRegisterForm sort={SORT} />
    </div>
  );
};

export default TalentRegisterShare;
