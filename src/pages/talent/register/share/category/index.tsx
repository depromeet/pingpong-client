import TalentRegisterCategotyHeader from '@/components/talentRegister/TalentRegisterCategoryHeader';
import TalentRegisterCategoryTabList from '@/components/talentRegister/TalentRegisterCategoryTabList';

// 중복되는 코드로 추후 리팩토링 필요
const sort = 'SHARE';

const TalentRegisterShareCategory = () => {
  return (
    <>
      <TalentRegisterCategotyHeader sort={sort} />
      <TalentRegisterCategoryTabList />
    </>
  );
};

export default TalentRegisterShareCategory;
