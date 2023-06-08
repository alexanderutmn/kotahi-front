import React from 'react';

import SlideItem from './SlideItem/SlideItem';
import classes from './SwiperComponent.module.css';
import SwiperContainer from './SwiperContainer/SwiperContainer';
import SwiperNavigation from './SwiperNavigation/SwiperNavigation';

const slides: Array<JSX.Element> = Array.from({ length: 10 }).map((el, index) => <SlideItem index={index} />);

const SwiperComponent: React.FC = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={classes.container}>
      <SwiperNavigation navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
      <SwiperContainer
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        slides={slides}
        customClassesSwiperSlide={classes.swiperSlide}
      />
    </div>
  );
};

export default SwiperComponent;
