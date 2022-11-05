/* doc: https://swiperjs.com/react */

// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

// MEMO: 아래 코드는 swiper로 생성한 카루셀 예시코드임. 변경 필요
const carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default carousel;
