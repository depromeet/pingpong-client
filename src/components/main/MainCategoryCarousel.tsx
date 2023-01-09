/* doc: https://swiperjs.com/react */

import { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { uniqueId } from '@/lib/utils';
import type { MainCategory } from '@/typings/common';

import MainCategoryItem from './MainCategoryItem';

const CategoryCarousel = ({
  list,
  activeCategoryId,
  onClick,
}: {
  list: MainCategory[];
  activeCategoryId: number;
  onClick: (id: number) => void;
}) => {
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
          <SwiperSlide key={uniqueId('category-carousel')} onClick={() => onClick(item.id)}>
            <MainCategoryItem category={item} isActive={activeCategoryId === item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default CategoryCarousel;

const SwiperWrapper = styled.div`
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
