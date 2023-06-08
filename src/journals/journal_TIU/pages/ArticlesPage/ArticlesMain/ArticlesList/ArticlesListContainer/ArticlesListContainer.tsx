import React from 'react';

import ArticleListItem from './ArticleListItem/ArticleListItem';
import { selectorManuscripts } from '../../../../../../../store/articlesSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';

const ArticlesListContainer: React.FC = () => {
  const manuscripts = useAppSelector(selectorManuscripts);

  return (
    <ul id="accordion" className="sj-articledetails sj-articledetailsvtwo">
      {manuscripts.map((manuscript) => {
        return <ArticleListItem key={manuscript.id} manuscript={manuscript} />;
      })}
    </ul>
  );
};

export default ArticlesListContainer;
