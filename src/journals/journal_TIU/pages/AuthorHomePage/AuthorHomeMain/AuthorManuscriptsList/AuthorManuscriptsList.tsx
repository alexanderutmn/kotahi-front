import React from 'react';

import AuthorManuscriptsListContainer from './AuthorManuscriptsListContainer/AuthorManuscriptsListContainer';
import AuthorManuscriptsListHeader from './AuthorManuscriptsListHeader/AuthorManuscriptsListHeader';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import {
  getMyManuscriptsThunk,
  selectorManuscriptsParams,
  selectorManuscriptsTotalCount,
} from '../../../../../../store/articlesSlice';
import { IQueryParams } from '../../../../../../utils/functions';
import PaginationComponent from '../../../../components/PaginationComponent/PaginationComponent';

const AuthorManuscriptsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const totalCount = useAppSelector(selectorManuscriptsTotalCount);
  const params = useAppSelector(selectorManuscriptsParams);
  let page = 0;
  if (params && params['page']) {
    page = Number(params['page']);
  }

  const onChangePage = (pageNum: number) => {
    let newParams: IQueryParams | undefined = undefined;
    if (params) {
      newParams = { ...params, page: String(pageNum - 1) };
    }
    dispatch(getMyManuscriptsThunk(newParams));
  };

  return (
    <div id="sj-content" className="sj-content sj-addarticleholdcontent">
      <AuthorManuscriptsListHeader />
      <AuthorManuscriptsListContainer />
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

export default AuthorManuscriptsList;
