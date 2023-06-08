import React from 'react';
import classes from './LoginForm.module.css';

import imagesOrcidLogo from '../../../../images/orcid-logo.jpg';
import classNames from 'classnames';
import { selectorUserLanguage, selectorUserSliceIsAuth, selectorUserSliceUser } from '../../../../../store/userSlice';
import { useAppSelector } from '../../../../../hooks/hooks';
import { useTranslation } from 'react-i18next';
import WhyOrcidEn from './ WhyOrcidEn/ WhyOrcidEn';
import { LanguageEnum } from '../../../components/Header/LanguageSelector/LanguageSelector';
import WhyOrcidRu from './WhyOrcidRu/WhyOrcidRu';
import { useSearchParams } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const isAuth = useAppSelector(selectorUserSliceIsAuth);
  const language = useAppSelector(selectorUserLanguage);
  const user = useAppSelector(selectorUserSliceUser);

  const [search] = useSearchParams();
  const from = search.get('from') ?? '';

  const onClickLogin = () => {
    if (!isAuth) {
      window.location.href = `${process.env.REACT_APP_APP_HOST_URL}/auth/orcid?from=${window.location.origin}${from}`;
    }
  };

  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace sj-loginupdates">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className={classes.loginContainer}>
                <div className="sj-widgetcontent">
                  <div className="sj-formtheme sj-formlogin">
                    <div className="sj-btnarea">
                      <button className="sj-login-img" onClick={onClickLogin} style={{ backgroundColor: 'inherit' }}>
                        <img src={imagesOrcidLogo} alt="description" />
                      </button>
                      {isAuth ? (
                        <span className={classes.titleHello}> Hello {user && user.name}</span>
                      ) : (
                        <button
                          className={classNames('sj-btn', 'sj-btnactive', classes.btnLogin)}
                          onClick={onClickLogin}
                        >
                          {t('loginPage.loginNow')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div id="sj-content" className="sj-content">
                <div className="sj-registerarea">
                  <div className="registernow">
                    <div className="sj-registerformholder">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="sj-howtoregister">
                            {!isAuth && (
                              <h4 className={classes.createTitle}>
                                {t('loginPage.createTitle')}
                                <a
                                  href="https://orcid.org/"
                                  className={'buttonLinkUnderline'}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  orcid.org
                                </a>
                              </h4>
                            )}
                            {language === LanguageEnum.en && <WhyOrcidEn />}
                            {language === LanguageEnum.ru && <WhyOrcidRu />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
