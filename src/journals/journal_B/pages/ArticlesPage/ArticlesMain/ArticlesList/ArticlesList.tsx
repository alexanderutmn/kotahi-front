import React from 'react';

import ArticlesListContainer from './ArticlesListContainer/ArticlesListContainer';
import ArticlesListHeader from './ArticlesListHeader/ArticlesListHeader';
import PaginationComponent from '../../../../components/PaginationComponent/PaginationComponent';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import {
  getArticlesThunk,
  selectorArticlesIsLoadingArticles,
  selectorManuscriptsParams,
  selectorManuscriptsTotalCount,
} from '../../../../../../store/articlesSlice';
import { IQueryParams } from '../../../../../../utils/functions';
import { SortDirectionType } from '../../../../../../types/types';
import AnimatedPage from '../../../../components/AnimatedPage/AnimatedPage';
import Preloader from '../../../../components/Preloader/Preloader';

const ArticlesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector(selectorManuscriptsParams);
  const totalCount = useAppSelector(selectorManuscriptsTotalCount);
  const isLoading = useAppSelector(selectorArticlesIsLoadingArticles);

  let page = 0;
  if (params && params['page']) {
    page = Number(params['page']);
  }

  const onChangePage = (pageNum: number) => {
    let newParams: IQueryParams | undefined = undefined;
    if (params) {
      newParams = { ...params, page: String(pageNum - 1) };
    }
    dispatch(getArticlesThunk(newParams));
  };

  const onSearchClick = (data: string) => {
    const newParams = { ...params, filters: `meta.title_eq_${data}`, page: '0' };
    dispatch(getArticlesThunk(newParams));
  };

  const onSortClick = (sortDirection: SortDirectionType) => {
    let newParams: IQueryParams | undefined = undefined;
    if (params) {
      if (sortDirection === undefined) {
        newParams = { ...params, page: '0' };
        delete newParams['sortDir'];
        delete newParams['sortBy'];
      } else {
        newParams = { ...params, page: '0', sortBy: 'meta:title', sortDir: sortDirection };
      }
    }
    dispatch(getArticlesThunk(newParams));
  };

  return (
    <div id="sj-content" className="sj-content sj-addarticleholdcontent">
      <ArticlesListHeader
        onSearchClick={onSearchClick}
        onSortClick={onSortClick}
        totalItems={totalCount}
        onChangePage={onChangePage}
        selectedPage={page}
      />
      {isLoading ? (
        <Preloader height={'calc(100vh - 234px - 44px)'} />
      ) : (
        <AnimatedPage>
          <ArticlesListContainer />
        </AnimatedPage>
      )}
      <PaginationComponent
        totalItems={totalCount}
        onChangePage={onChangePage}
        itemPerPage={10}
        selectedPage={page + 1}
        buttonsLimit={25}
      />
    </div>
  );
};

export default ArticlesList;
