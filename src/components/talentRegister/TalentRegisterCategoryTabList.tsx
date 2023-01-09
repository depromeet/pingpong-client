import useCategoriesQuery from '@/hooks/queries/useCategoriesQuery';

import TabList from '../common/TabList';

const TalentRegisterCategoryTabList = () => {
  const {
    mainMidCategoryQuery: { isLoading, data },
  } = useCategoriesQuery({});

  return (
    <>
      {!isLoading && (
        <div className="mb-24">
          <TabList categoryKey="mainCategory" list={data} />
        </div>
      )}
    </>
  );
};

export default TalentRegisterCategoryTabList;
