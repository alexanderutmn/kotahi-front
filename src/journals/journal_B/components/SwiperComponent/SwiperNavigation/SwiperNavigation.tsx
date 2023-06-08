import classNames from 'classnames';
import React from 'react';

import classes from './SwiperNavigation.module.css';
import { useTranslation } from 'react-i18next';

type PropsType = {
  navigationPrevRef: React.MutableRefObject<HTMLButtonElement | null>;
  navigationNextRef: React.MutableRefObject<HTMLButtonElement | null>;
  onClickViewAll?: () => void;
  customClassName?: string;
};

const SwiperNavigation: React.FC<PropsType> = ({
  navigationPrevRef,
  navigationNextRef,
  onClickViewAll,
  customClassName,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.container, { customClassName: customClassName })}>
      <button ref={navigationPrevRef} className={classes.button}>
        <i className="fa fa-angle-left" />
      </button>
      <div className={classes.buttonViewAllContainer}>
        {onClickViewAll && (
          <button className={classes.buttonViewAll} onClick={onClickViewAll}>
            <div className={classes.btnTitle}>{t('viewAll')}</div>
          </button>
        )}
      </div>
      <button ref={navigationNextRef} className={classes.button}>
        <i className="fa fa-angle-right" />
      </button>
    </div>
  );
};

export default SwiperNavigation;
