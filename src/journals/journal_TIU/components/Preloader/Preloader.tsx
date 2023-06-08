import React from 'react';
import classes from './Preloader.module.css';

type PropsType = {
  height?: string;
};

const Preloader: React.FC<PropsType> = ({ height }) => {
  return (
    <div className={height ? classes.blockPreloader : 'preloader-outer'} style={{ height: height ? height : '100%' }}>
      <div className={height ? classes.blockLoader : 'loader'}>
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
      </div>
    </div>
  );
};

export default Preloader;
