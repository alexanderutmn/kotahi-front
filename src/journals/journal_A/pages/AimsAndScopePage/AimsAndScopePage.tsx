import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import AimsAndScopeMain from './AimsAndScopeMain/AimsAndScopeMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const AimsAndScopePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner
        title={t('header.rightsAndPermissions')}
        customLink={{ route: '/aims_and_scope', routeDescription: t('header.rightsAndPermissions') }}
      />
      <AnimatedPage>
        <AimsAndScopeMain />
      </AnimatedPage>

      <Footer />
    </>
  );
};

export default AimsAndScopePage;
