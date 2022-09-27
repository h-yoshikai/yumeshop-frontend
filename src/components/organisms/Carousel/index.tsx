import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';

const Wrapper = styled(Swiper)`
  max-width: 375px;
  .swiper-pagination-bullet {
    background-color: ${colors.White};
    opacity: 1;
    height: 15px;
    width: 15px;
  }
  .swiper-pagination-bullet-active {
    background-color: ${colors.Black};
  }
`;

export const Carousel = () => (
  <Wrapper modules={[Navigation, Pagination]} pagination={{ clickable: true }}>
    <SwiperSlide>
      <Image
        src="http://placehold.jp/700x400.png?text=1"
        alt=""
        width="375px"
        height="375px"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="http://placehold.jp/700x400.png?text=2"
        alt=""
        width="375px"
        height="375px"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="http://placehold.jp/700x400.png?text=3"
        alt=""
        width="375px"
        height="375px"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="http://placehold.jp/700x400.png?text=4"
        alt=""
        width="375px"
        height="375px"
      />
    </SwiperSlide>
  </Wrapper>
);
