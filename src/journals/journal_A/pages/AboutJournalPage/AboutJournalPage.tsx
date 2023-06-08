import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import AboutJournalForm from './AboutJournalForm/AboutJournalForm';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const AboutJournalPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner title={t('about')} customLink={{ route: '/about', routeDescription: t('about') }} />
      <AnimatedPage>
        <AboutJournalForm />
      </AnimatedPage>

      <Footer />
    </>
  );
};

export default AboutJournalPage;
