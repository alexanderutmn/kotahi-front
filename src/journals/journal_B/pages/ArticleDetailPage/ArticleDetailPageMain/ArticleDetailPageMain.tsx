import React from 'react';

import CommonRightColumn from '../../../components/CommonRightColumn/CommonRightColumn';
import ArticleDetailPageMainLeftColumn from './ArticleDetailPageMainLeftColumn/ArticleDetailPageMainLeftColumn';
import { selectorManuscript } from '../../../../../store/articlesSlice';
import { useAppSelector } from '../../../../../hooks/hooks';

const ArticleDetailPageMain: React.FC = () => {
  const manuscript = useAppSelector(selectorManuscript);
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <ArticleDetailPageMainLeftColumn manuscript={manuscript} />
            <CommonRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetailPageMain;
