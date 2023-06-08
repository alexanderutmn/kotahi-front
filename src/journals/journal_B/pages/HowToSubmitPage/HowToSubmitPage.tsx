import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import HowToSubmitPageMain from './HowToSubmitPageMain/HowToSubmitPageMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const HowToSubmitPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner
        title={t('howToSubmit')}
        customLink={{ route: '/how_to_submit', routeDescription: t('howToSubmit') }}
      />
      <AnimatedPage>
        <HowToSubmitPageMain />
      </AnimatedPage>
      <Footer />
    </>
  );
};

export default HowToSubmitPage;
