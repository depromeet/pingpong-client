/* doc: https://swiperjs.com/react */

import { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { uniqueId } from '@/lib/utils';
import type { MainCategoryInfo } from '@/typings/common';

import MainCategoryItem from './MainCategoryItem';

const CategoryCarousel = ({ list }: { list: MainCategoryInfo[] }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={5}
        centeredSlides={true}
        modules={[Pagination]}
        initialSlide={0}
        centeredSlidesBounds={true}
      >
        {list.map((item) => (
          <SwiperSlide key={uniqueId('category-carousel')} onClick={() => setActiveCategoryId(item.id)}>
            <MainCategoryItem category={item} isActive={activeCategoryId === item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default CategoryCarousel;

const SwiperWrapper = styled.div`
  padding-left: 1rem;

  .swiper {
    padding-bottom: 3.6rem;
  }

  .swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-pagination {
    bottom: 1.2rem;
  }

  .swiper-pagination-bullet-active {
    background: black;
  }
`;
