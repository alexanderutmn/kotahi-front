import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import {
  getPublishedArticle,
  selectorArticlesIsLoadingArticles,
  selectorManuscript,
} from '../../../../store/articlesSlice';
import Preloader from '../../components/Preloader/Preloader';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import ArticleDetailPageMain from './ArticleDetailPageMain/ArticleDetailPageMain';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useTranslation } from 'react-i18next';

const ArticleDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const manuscript = useAppSelector(selectorManuscript);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectorArticlesIsLoadingArticles);

  const { manuscript_id } = useParams();

  useEffect(() => {
    dispatch(getPublishedArticle(manuscript_id!));
  }, [manuscript_id, dispatch]);

  const articleTitle = manuscript?.meta?.title ? manuscript?.meta?.title : t('articles');

  return (
    <>
      <Header />
      <InnerBanner title={articleTitle} customLink={{ route: '/articles', routeDescription: t('articles') }} />
      {isLoading ? (
        <Preloader height={'calc(100vh - 234px - 44px)'} />
      ) : (
        <AnimatedPage>
          <ArticleDetailPageMain />
        </AnimatedPage>
      )}
      <Footer />
    </>
  );
};

export default ArticleDetailPage;
