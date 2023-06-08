import React from 'react';
import ArticlesList from './ArticlesList/ArticlesList';

const ArticlesMain: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <ArticlesList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticlesMain;
