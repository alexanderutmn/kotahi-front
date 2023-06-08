import React from 'react';

import CommonRightColumn from '../../../components/CommonRightColumn/CommonRightColumn';
import AuthorGuideLinesLeftColumn from './AuthorGuideLinesLeftColumn/AuthorGuideLinesLeftColumn';

const AuthorGuideLinesMain: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <AuthorGuideLinesLeftColumn />
            <CommonRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthorGuideLinesMain;
