import React, { useEffect } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import ArticlesMain from './ArticlesMain/ArticlesMain';
import { useAppDispatch } from '../../../../hooks/hooks';
import { getArticlesThunk, resetManuscriptsQueryParams } from '../../../../store/articlesSlice';
import { useTranslation } from 'react-i18next';

const ArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getArticlesThunk({ page: '0', limit: '10' }));
    return () => {
      dispatch(resetManuscriptsQueryParams());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <InnerBanner title={t('browseArticles')} customLink={{ route: '/articles', routeDescription: t('articles') }} />
      <ArticlesMain />
      <Footer />
    </>
  );
};

export default ArticlesPage;
