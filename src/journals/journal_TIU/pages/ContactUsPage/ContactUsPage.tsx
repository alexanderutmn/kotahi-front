import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import ContactUsPageMain from './ContactUsPageMain/ContactUsPageMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const ContactUsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner title={t('contactUs')} customLink={{ route: '/how_to_submit', routeDescription: t('contactUs') }} />
      <AnimatedPage>
        <ContactUsPageMain />
      </AnimatedPage>
      <Footer />
    </>
  );
};

export default ContactUsPage;
