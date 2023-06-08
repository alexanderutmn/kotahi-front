import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import NewArticlePageMain from './NewArticlePageMain/NewArticlePageMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const NewArticlePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <InnerBanner
        title={t('submitYourArticle')}
        customLink={{ route: '/submit_article', routeDescription: t('submitYourArticle') }}
      />
      <AnimatedPage>
        <NewArticlePageMain />
      </AnimatedPage>

      <Footer />
    </>
  );
};

export default NewArticlePage;
