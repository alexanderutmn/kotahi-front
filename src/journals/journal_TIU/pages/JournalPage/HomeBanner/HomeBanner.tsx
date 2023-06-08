import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './HomeBanner.module.css';

import frontImg from './../../../images/fronimg.png';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../hooks/hooks';
import { selectorUserSliceIsAuth } from '../../../../../store/userSlice';
import classNames from 'classnames';

const HomeBanner: React.FC = () => {
  const { t } = useTranslation();
  const isAuth = useAppSelector(selectorUserSliceIsAuth);
  const navigate = useNavigate();

  const onClickSubmitYourArticle = () => {
    if (isAuth) {
      navigate('/new_article');
    } else {
      navigate('/login?from=/new_article');
    }
  };

  return (
    <div id="sj-homebanner" className="sj-homebanner">
      <div className="container">
        <div className={classNames('row', classes.rowMobile)}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="sj-postbook">
              <figure className="sj-featureimg">
                <button className={classes.btnvideo} onClick={onClickSubmitYourArticle}>
                  {t('submitYourArticle')}
                </button>
                <div className="sj-bookimg">
                  <div className="sj-frontcover">
                    <img src={frontImg} alt="description" />
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="sj-bannercontent">
              <h1>
                <span
                  className={'splitTextLines fontForRus'}
                  style={{ fontWeight: 300, fontSize: '32px', lineHeight: '48px' }}
                >
                  {t('journalPage.homeBanner.title')}
                </span>
              </h1>
              <div className="sj-description">
                <p>
                  {t('journalPage.homeBanner.description')}
                  <Link to={'/about'} className={'buttonLinkUnderline'}>
                    {t('readMore')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
