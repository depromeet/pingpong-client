import styled from 'styled-components';

import { colors } from '@/constants/styles';
import type { MainCategory } from '@/typings/common';

import CircleImg from '../common/CircleImg';

const MainCategoryItem = ({ category, isActive }: { category: MainCategory; isActive: boolean }) => {
  return (
    <CategoryItemContainer>
      <CircleImg
        size="xxlarge"
        alt="main-category-image"
        src={category.image}
        bgColor={isActive ? colors.primaryBlue : colors.gray100}
      />
      <CategoryName isActive={isActive}>{category.name}</CategoryName>
    </CategoryItemContainer>
  );
};

export default MainCategoryItem;

const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryName = styled.h5<{ isActive: boolean }>`
  text-align: center;
  margin-top: 0.8rem;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.03rem;
  color: ${({ isActive }: { isActive: boolean }) => (isActive ? 'black' : `${colors.gray400}`)};
`;
