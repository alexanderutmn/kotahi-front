import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import orcidLogo from '../../../images/orcid-logo.jpg';
import logoJournal from '../../images/gstou-logo.png';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { logoutUser, selectorUserSliceIsAuth, selectorUserSliceUser } from '../../../../store/userSlice';
import classes from './Header.module.css';
import classNames from 'classnames';

import LanguageSelector from './LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectorUserSliceIsAuth);
  const user = useAppSelector(selectorUserSliceUser);

  const [mobileMenuCollapse, setMobileMenuCollapse] = useState(true);

  const { t } = useTranslation();

  const onClickLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const onClickLogin = () => {
    navigate('/login');
  };

  const onClickSubmitYourArticle = () => {
    if (isAuth) {
      navigate('/new_article');
    } else {
      navigate('/login?from=/new_article');
    }
  };

  const onClickAuthorHomePage = () => {
    if (isAuth) {
      navigate('/author');
    } else {
      navigate('/login?from=/author');
    }
  };

  const onMobileMenuClick = () => {
    setMobileMenuCollapse((pevState) => !pevState);
  };

  return (
    <header id="sj-header" className="sj-header sj-haslayout" style={{ borderBottom: undefined }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="sj-topbar">
              <div className="sj-languagelogin" style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.btnLogin} onClick={onClickLogin}>
                  {!isAuth && <span className={classes.titleLogin}>{t('header.login')}</span>}
                  <img className={classes.loginImg} src={orcidLogo} alt="description" />
                </div>
                {isAuth && (
                  <>
                    <span className={classes.titleUser}>{user && user.name}</span>
                    <button className={classes.btnLogout} onClick={onClickLogout}>
                      {t('header.logout')}
                    </button>
                  </>
                )}
                <LanguageSelector />
              </div>
            </div>
            <div className="sj-navigationarea">
              <strong className="sj-logo">
                <Link to={'/'}>
                  <img src={logoJournal} className={classes.imgLogo} alt="company logo here" />
                  <span className={'splitTextLines'}>{t('header.title')}</span>
                </Link>
              </strong>
              <div className="sj-rightarea">
                <nav id="sj-nav" className={classNames('sj-nav', 'navbar-expand-lg', classes.navMenu)}>
                  <button className={classNames('navbar-toggler')} onClick={onMobileMenuClick}>
                    <i className="lnr lnr-menu" />
                  </button>
                  <div
                    className={classNames('navbar-collapse', 'sj-navigation', 'collapse', {
                      show: !mobileMenuCollapse,
                    })}
                  >
                    {window.innerWidth > 576 ? (
                      <ul>
                        <li className="current-menu-item menu-item-has-children page_item_has_children">
                          <Link to={'/'}>
                            <i className="lnr lnr-home" />
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to={'/'}>{t('header.journalHomepage')}</Link>
                            </li>
                            <li>
                              <button className={classes.btnMenuItem} onClick={onClickAuthorHomePage}>
                                {t('header.authorHomepage')}
                              </button>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={'/about'}>{t('about')}</Link>
                        </li>
                        <li>
                          <Link to={'/articles'}>{t('header.articles')}</Link>
                        </li>
                        <li className="menu-item-has-children page_item_has_children">
                          <button className={'navButton'}>{t('resources')}</button>
                          <ul className="sub-menu" style={{ width: '250px' }}>
                            <li>
                              <Link to={'/author_guide_lines'}>{t('authorGuideline')}</Link>
                            </li>
                            <li>
                              <Link to={'/how_to_submit'}>{t('howToSubmit')}</Link>
                            </li>
                            <li>
                              <Link to={'/aims_and_scope'}>{t('policies')}</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    ) : (
                      <nav id="sj-nav" className="sj-nav navbar-expand-lg">
                        <div
                          className={classNames(
                            'navbar-collapse',
                            'sj-navigation',
                            'collapse',
                            'show',
                            classes.subMenuMobile
                          )}
                        >
                          <ul>
                            <li>
                              <Link to={'/'}>{t('header.journalHomepage')}</Link>
                            </li>
                            <li>
                              <Link to={'/author'}>{t('header.authorHomepage')}</Link>
                            </li>
                            <li>
                              <Link to={'/about'}>{t('about')}</Link>
                            </li>
                            <li>
                              <Link to={'/articles'}>{t('header.articles')}</Link>
                            </li>
                            <li>
                              <Link to={'/author_guide_lines'}>{t('authorGuideline')}</Link>
                            </li>
                            <li>
                              <Link to={'/how_to_submit'}>{t('howToSubmit')}</Link>
                            </li>
                            <li>
                              <Link to={'/aims_and_scope'}>{t('policies')}</Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    )}
                  </div>
                </nav>
                <button className="sj-btn sj-btnactive" onClick={onClickSubmitYourArticle}>
                  {t('submitYourArticle')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
