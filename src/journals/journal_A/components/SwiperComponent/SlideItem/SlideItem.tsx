import React from 'react';

import classes from './SlideItem.module.css';

type PropsType = {
  index: number;
};

const SlideItem: React.FC<PropsType> = ({ index }) => {
  return <div className={classes.container}>{`Slide ${index + 1}`}</div>;
};

export default SlideItem;
