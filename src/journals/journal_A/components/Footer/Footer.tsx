import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { scrollTop } from '../../../../utils/functions';
import wspLogo2 from '../../../images/wsp-logo-2.png';
import classes from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const onClickReadMore = () => {
    console.log('Go to Alexandrina.com');
  };

  return (
    <footer id="sj-footer" className="sj-footer sj-haslayout">
      <div className="container">
        <div className="row">
          <button
            className={classNames('sj-btnscrolltotop', classes.btnScrollToTop)}
            onClick={() => {
              scrollTop();
            }}
          >
            <i className="fa fa-angle-up" />
          </button>
          <div className="sj-footercolumns">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
              <div className="sj-fcol sj-footeraboutus">
                <strong
                  className="sj-logo"
                  onClick={() => {
                    scrollTop();
                  }}
                >
                  <button onClick={onClickReadMore} className={classes.btnLogo}>
                    <img src={wspLogo2} alt="description" />
                  </button>
                </strong>
                <div className="sj-description">
                  <p>{t('footer.title')}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
              <div className="sj-fcol sj-widget sj-widgetusefullinks">
                <div className="sj-widgetheading">
                  <h3>{t('about')}</h3>
                </div>
                <div className="sj-widgetcontent">
                  <ul>
                    <li
                      onClick={() => {
                        scrollTop();
                      }}
                    >
                      <Link to={'/about'}>{t('footer.journal')}</Link>
                    </li>
                    <li
                      onClick={() => {
                        scrollTop();
                      }}
                    >
                      <Link to={'/editorial_board'}>{t('editorialBoardPage.title')}</Link>
                    </li>
                    <li
                      onClick={() => {
                        scrollTop();
                      }}
                    >
                      <Link to={'/rights_and_permissions'}>{t('footer.rightsAndPermissions')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
              <div className="sj-fcol sj-widget sj-widgetresources">
                <div className="sj-widgetheading">
                  <h3>{t('resources')}</h3>
                </div>
                <div className="sj-widgetcontent">
                  <ul>
                    <li
                      onClick={() => {
                        scrollTop();
                      }}
                    >
                      <Link to={'/author_guide_lines'}>{t('authorGuideline')}</Link>
                    </li>
                    <li
                      onClick={() => {
                        scrollTop();
                      }}
                    >
                      <Link to={'/how_to_submit'}>{t('howToSubmit')}</Link>
                    </li>
                    <li
                      onClick={() => {
                        scrollTop();
                      }}
                    >
                      <Link to={'/aims_and_scope'}>{t('policies')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
              <div className="sj-fcol sj-widget sj-widgetcontactus">
                <div className="sj-widgetheading">
                  <h3>{t('contactUs')}</h3>
                </div>
                <div className="sj-widgetcontent">
                  <ul>
                    <li>
                      <i className="lnr lnr-home" />
                      <address className={'splitTextLines'}>{t('footer.address')}</address>
                    </li>
                    <li>
                      <a href="tel:(+7)8712295932">
                        <i className="lnr lnr-phone" />
                        <span>{t('footer.phone')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:trudy-ggntu@mail.ru">
                        <i className="lnr lnr-envelope" />
                        <span style={{ textTransform: 'lowercase' }}>trudy-ggntu@mail.ru</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sj-footerbottom">
            <p className="sj-copyrights">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
