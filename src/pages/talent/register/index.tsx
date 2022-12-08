import HeaderTitle from '@/components/common/HeaderTitle';
import NavigationBar from '@/components/common/NavigationBar';
import TalentRegisterCard from '@/components/talentRegister/TalentRegisterCard';

const TITLE = ['Ping-Pong !', '재능을 공유 할 방식을 선택해주세요'];

const TalentRegister = () => {
  return (
    <div className="relative w-full h-[812px] px-[16px]">
      <HeaderTitle texts={TITLE} className="pt-[60px]" />
      <TalentRegisterCard sort="SHARE" className="mt-[48px]" />
      <TalentRegisterCard sort="EXCHANGE" className="mt-[16.5px]" />
      <NavigationBar className="fixed bottom-0 left-0" />
    </div>
  );
};

export default TalentRegister;
