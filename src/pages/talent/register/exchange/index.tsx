import TalentRegisterForm from '@/components/talentRegister/TalentRegisterForm';
import TalentRegisterHeader from '@/components/talentRegister/TalentRegisterHeader';

const SORT = 'EXCHANGE';

const TalentRegisterExchange = () => {
  return (
    <div className="w-[375px] px-[16px]">
      <TalentRegisterHeader sort={SORT} />
      <TalentRegisterForm className="py-[24px]" sort={SORT} />
    </div>
  );
};

export default TalentRegisterExchange;