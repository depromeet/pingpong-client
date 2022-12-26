import Header from '@/components/common/Header';
import TalentRegisterCategoryTabList from '@/components/talentRegister/TalentRegisterCategoryTabList';
import TalentRegisterCategoryTagList from '@/components/talentRegister/TalentRegisterCategoryTagList';

export default function ProfileTalent() {
  return (
    <>
      <Header title="이런 재능이 있어요" className="bg-white" />
      <TalentRegisterCategoryTabList />
      <TalentRegisterCategoryTagList sort={'EXCHANGE'} />
    </>
  );
}
