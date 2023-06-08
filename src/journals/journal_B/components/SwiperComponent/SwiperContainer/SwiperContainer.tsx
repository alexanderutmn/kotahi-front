import 'swiper/css';

import classNames from 'classnames';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './SwiperContainer.module.css';

type PropsType = {
  navigationPrevRef: React.MutableRefObject<HTMLButtonElement | null>;
  navigationNextRef: React.MutableRefObject<HTMLButtonElement | null>;
  slides: Array<JSX.Element>;
  slidesPerView?: number;
  customClassesSwiperSlide?: string;
  loop?: boolean;
};

const SwiperContainer: React.FC<PropsType> = ({
  navigationPrevRef,
  navigationNextRef,
  slides,
  slidesPerView = 1,
  customClassesSwiperSlide,
  loop = false,
}) => {
  return (
    <Swiper
      onInit={(swiper) => {
        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }}
      modules={[Navigation]}
      className={classes.swiper}
      loop={loop}
      slidesPerView={slidesPerView}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide
          key={index}
          virtualIndex={index}
          className={classNames(classes.swiperSlide, { customClassesSwiperSlide: customClassesSwiperSlide })}
        >
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
