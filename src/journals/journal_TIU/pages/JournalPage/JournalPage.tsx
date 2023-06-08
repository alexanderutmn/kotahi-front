import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeBanner from './HomeBanner/HomeBanner';
import JournalPageMain from './JournalPageMain/JournalPageMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

const JournalPage: React.FC = () => {
  return (
    <>
      <Header />
      <AnimatedPage>
        <>
          <HomeBanner />
          <JournalPageMain />
        </>
      </AnimatedPage>
      <Footer />
    </>
  );
};

export default JournalPage;
