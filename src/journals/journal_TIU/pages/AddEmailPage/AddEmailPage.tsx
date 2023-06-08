import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import AddEmailPageMain from './AddEmailPageMain/AddEmailPageMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const AddEmailPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <InnerBanner
        title={t('enterYourEmail')}
        customLink={{ route: '/email', routeDescription: t('enterYourEmail') }}
      />
      <AnimatedPage>
        <AddEmailPageMain />
      </AnimatedPage>

      <Footer />
    </>
  );
};

export default AddEmailPage;
