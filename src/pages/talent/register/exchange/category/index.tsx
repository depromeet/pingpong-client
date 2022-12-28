import TalentRegisterCategotyHeader from '@/components/talentRegister/TalentRegisterCategoryHeader';
import TalentRegisterCategoryTabList from '@/components/talentRegister/TalentRegisterCategoryTabList';
import TalentRegisterCategoryTagList from '@/components/talentRegister/TalentRegisterCategoryTagList';

// 중복되는 코드로 추후 리팩토링 필요
const sort = 'EXCHANGE';

const TalentRegisterExchangeCategory = () => {
  return (
    <>
      <div className="fixed top-0">
        <TalentRegisterCategotyHeader sort={sort} />
        <TalentRegisterCategoryTabList />
      </div>
      <TalentRegisterCategoryTagList sort={sort} />
    </>
  );
};

export default TalentRegisterExchangeCategory;
