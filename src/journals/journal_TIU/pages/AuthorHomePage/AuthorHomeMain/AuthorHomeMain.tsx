import React, { useEffect } from 'react';

import AuthorManuscriptsList from './AuthorManuscriptsList/AuthorManuscriptsList';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import {
  getMyManuscriptsThunk,
  resetManuscriptsQueryParams,
  selectorArticlesIsLoadingArticles,
} from '../../../../../store/articlesSlice';
import Preloader from '../../../components/Preloader/Preloader';

const AuthorHomeMain: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectorArticlesIsLoadingArticles);

  useEffect(() => {
    dispatch(getMyManuscriptsThunk({ page: '0', limit: '10' }));
    return () => {
      dispatch(resetManuscriptsQueryParams());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div className="container">
        <div className="row">
          <div id="sj-twocolumns" className="sj-twocolumns">
            {isLoading ? <Preloader height={'calc(100vh - 234px - 44px)'} /> : <AuthorManuscriptsList />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthorHomeMain;
