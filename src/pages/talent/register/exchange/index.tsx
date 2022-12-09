import TalentRegisterForm from '@/components/talentRegister/TalentRegisterForm';
import TalentRegisterHeader from '@/components/talentRegister/TalentRegisterHeader';

const SORT = 'EXCHANGE';

const TalentRegisterExchange = () => {
  return (
    <div className="w-[375px]">
      <TalentRegisterHeader sort={SORT} />
      <TalentRegisterForm className="px-[16px] py-[24.5px]" sort={SORT} />
    </div>
  );
};

export default TalentRegisterExchange;
