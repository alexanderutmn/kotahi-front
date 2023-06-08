import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import AuthorHomeMain from './AuthorHomeMain/AuthorHomeMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const AuthorHomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <InnerBanner
        title={t('header.authorHomepage')}
        customLink={{ route: 'submit', routeDescription: t('header.authorHomepage') }}
      />
      <AnimatedPage>
        <AuthorHomeMain />
      </AnimatedPage>
      <Footer />
    </>
  );
};

export default AuthorHomePage;
