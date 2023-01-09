/* doc: https://swiperjs.com/react */

import Link from 'next/link';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { uniqueId } from '@/lib/utils';
import type { CardInfo } from '@/typings/common';

import Card from './Card';

interface CardCarouselInfo extends CardInfo {
  postId?: number;
}

const CardCarousel = ({ list }: { list: CardCarouselInfo[] }) => {
  return (
    <SwiperWrapper>
      <Swiper pagination={true} modules={[Pagination]}>
        {list.map((item) => (
          <SwiperSlide key={uniqueId('carousel-slide')}>
            <Link href={`/posts/${item.postId}`}>
              <Card {...item} hideTakenTalents={true} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default CardCarousel;

const SwiperWrapper = styled.div`
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

    a {
      width: 100%;
    }
  }

  .swiper-pagination {
    bottom: 1.2rem;
  }

  .swiper-pagination-bullet-active {
    background: black;
  }
`;
