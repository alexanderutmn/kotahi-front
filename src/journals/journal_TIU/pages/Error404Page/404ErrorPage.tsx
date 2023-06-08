import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import Error404Banner from './Error404Banner/Error404Banner';

const Error404Page = () => {
  return (
    <>
      <Header />
      <InnerBanner title={'Become A Member'} />
      <Error404Banner />
      <Footer />
    </>
  );
};

export default Error404Page;
