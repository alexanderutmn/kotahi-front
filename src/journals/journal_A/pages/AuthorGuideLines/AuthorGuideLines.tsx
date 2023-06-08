import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import AuthorGuideLinesMain from './AuthorGuideLinesMain/AuthorGuideLinesMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const AuthorGuideLines: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner
        title={t('authorGuideline')}
        customLink={{ route: '/author_guide_lines', routeDescription: t('authorGuideline') }}
      />
      <AnimatedPage>
        <AuthorGuideLinesMain />
      </AnimatedPage>

      <Footer />
    </>
  );
};

export default AuthorGuideLines;
