import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';
import { FC } from 'react';

export type CarouselType = {
  images: string[];
};

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

export const Carousel: FC<CarouselType> = (props) => {
  const { images } = props;

  return (
    <Wrapper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
    >
      {images.length !== 0 ? (
        images.map((image) => (
          <SwiperSlide>
            <Image src={image} alt="" width="375px" height="375px" />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <Image
            src="/placeholder-image.png"
            alt=""
            width="375px"
            height="375px"
          />
        </SwiperSlide>
      )}
    </Wrapper>
  );
};
