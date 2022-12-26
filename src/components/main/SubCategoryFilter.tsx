import styled from 'styled-components';

import { colors } from '@/constants/styles';

import ArrowDownIcon from '../../../public/icons/arrow-down.svg';
import CheckInactiveIcon from '../../../public/icons/check-inactive.svg';

const SubCategoryFilter = ({ isSubFilterVisible }: { isSubFilterVisible: boolean }) => {
  return (
    <FilterContainer>
      {isSubFilterVisible && (
        <SubFilterDropdown>
          소분류
          <ArrowDownIcon />
        </SubFilterDropdown>
      )}
      <FilterCheckbox>
        <CheckInactiveIcon />
        재능 나눔만
      </FilterCheckbox>
    </FilterContainer>
  );
};

export default SubCategoryFilter;

const tagFilterStyle = `
display: flex;
align-items: center;
padding: 0.55rem 1.4rem;
border: 0.1rem solid ${colors.gray200};
border-radius: 2rem;
color: ${colors.gray600};
font-size: 1.4rem;
line-height: 2.1rem;
letter-spacing: -0.03rem;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  margin-left: 1.6rem;
`;

const SubFilterDropdown = styled.button`
  ${tagFilterStyle};
  margin-right: 0.8rem;

  svg {
    margin-left: 0.8rem;
  }
`;

const FilterCheckbox = styled.button`
  ${tagFilterStyle};

  svg {
    margin-right: 0.8rem;
  }
`;
