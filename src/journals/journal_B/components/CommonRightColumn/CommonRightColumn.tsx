import React from 'react';
import classes from './CommonRightColumn.module.css';

import ccLogo from '../../images/cc.logo.large.png';
import imageOALogo from '../../images/Open-Access-logo.jpg';
import imagePLogo from '../../images/antiplagiatLogo.jpg';
import rincLogo from '../../images/rincLogo.png';
import vakLogo from '../../images/vakLogo.png';
import logoGSTOU from '../../images/gstou-logo.png';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const CommonRightColumn: React.FC = () => {
  const { t } = useTranslation();

  const onClickGoTo = () => {
    window.open('https://creativecommons.org/licenses/by/4.0/', '_blank');
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
      <aside id="sj-sidebar" className="sj-sidebar">
        <div className="sj-widget sj-widgetimpactfector">
          <div className={classNames('sj-widgetcontent', classes.itemContainer)}>
            <ul style={{ backgroundColor: '#FFF' }}>
              <li>
                <h3 style={{ textAlign: 'center' }}>{t('journalPage.journalPrinciples.openAccessTitle')}</h3>
                <div className="sj-description" style={{ textAlign: 'center' }}>
                  <button onClick={onClickGoTo}>
                    <img src={imageOALogo} style={{ backgroundColor: '#FFF' }} alt="description" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className={classNames('sj-widgetcontent', classes.itemContainer)}>
            <ul style={{ backgroundColor: '#FFF' }}>
              <li>
                <h3 style={{ textAlign: 'center' }}>{t('journalPage.journalPrinciples.plagiarismTitle')}</h3>
                <div className="sj-description" style={{ textAlign: 'center' }}>
                  <button className={'buttonLinkUnderline'} style={{ margin: '10px 0' }} onClick={onClickGoTo}>
                    Antiplagiat.ru
                  </button>
                  <button onClick={onClickGoTo}>
                    <img src={imagePLogo} style={{ backgroundColor: '#FFF', overflow: 'hidden' }} alt="description" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className={classNames('sj-widgetcontent', classes.itemContainer)}>
            <ul style={{ backgroundColor: '#FFF' }}>
              <li>
                <h3 style={{ textAlign: 'center' }}>{t('journalPage.journalPrinciples.openIndexTitle')}</h3>
                <div className="sj-description" style={{ textAlign: 'center' }}>
                  <button onClick={onClickGoTo}>
                    <img src={rincLogo} style={{ backgroundColor: '#FFF' }} alt="description" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className={classNames('sj-widgetcontent', classes.itemContainer)}>
            <ul style={{ backgroundColor: '#FFF' }}>
              <li>
                <h3 style={{ textAlign: 'center' }}>
                  {t('journalPage.journalPrinciples.higherAttestationCommissionTitle')}
                </h3>
                <div className="sj-description" style={{ textAlign: 'center' }}>
                  <button onClick={onClickGoTo}>
                    <img src={vakLogo} style={{ backgroundColor: '#FFF' }} alt="description" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className={classNames('sj-widgetcontent', classes.itemContainer)}>
            <ul style={{ backgroundColor: '#FFF' }}>
              <li>
                <h3 style={{ textAlign: 'center', backgroundColor: 'inherit' }}>
                  {' '}
                  {t('commonRightColumn.contentAvailable')}
                </h3>
                <div className="sj-description" style={{ textAlign: 'center' }}>
                  <button className={'buttonLinkUnderline'} style={{ margin: '10px 0' }} onClick={onClickGoTo}>
                    Creative Commons Attribution 4.0 License.
                  </button>
                  <button onClick={onClickGoTo}>
                    <img src={ccLogo} style={{ backgroundColor: '#FFF', overflow: 'hidden' }} alt="description" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className={classNames('sj-widgetcontent', classes.itemContainer)}>
            <ul style={{ backgroundColor: '#FFF' }}>
              <li>
                <div className="sj-description" style={{ textAlign: 'center' }}>
                  <button onClick={onClickGoTo}>
                    <img src={logoGSTOU} style={{ backgroundColor: '#FFF' }} alt="description" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CommonRightColumn;
