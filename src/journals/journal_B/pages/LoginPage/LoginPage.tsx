import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import LoginForm from './LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner
        title={t('innerBanner.login')}
        customLink={{ route: '/login', routeDescription: t('innerBanner.loginRegister') }}
      />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
